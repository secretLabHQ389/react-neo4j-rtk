import {
	createAsyncThunk, 
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {addFamilyMember,
	//getAllFamilyMembers,
	addFamilyMemberRelationship
} from '../apisNotes/db'

var neo4j = require('neo4j-driver');

const URI = 'neo4j+s://61c76ce3.databases.neo4j.io'
const USER = 'neo4j'
const PASSWORD = 'jtvkGRx3f2MqLczEpGXrPSC4n7IFUGOgM30_P_7JQEM'

//state defined on mount, to be changed from components:
const FamilyMembersState = {
	loading: false,
	familyAction: 'Welcome! Pick a Category to Begin!',
	allFamilyMembers: ['None retrieved.']
}

//TODO: define users type:
type users = any
type UserObject = {
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		}
	},
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	},
	email: string,
	id: number,
	name: string,
	phone: string,
	username: string,
	website: string
}

//handlers for api calls to be called in components:
export const addFamilyMemberHandler = createAsyncThunk(
    'properties/addMember',
    async (
        name,
		gender
      ): Promise<any> => {
          const data = await addFamilyMember(name, gender)
		  console.log('data: ', data)
          return (await data) as any //UserObject[]
  })

export const addFamilyMemberRelationshipHandler = createAsyncThunk(
    'properties/addMemberRelationship',
    async (
        name,
		payload
      ): Promise<any> => {
          const data = await addFamilyMemberRelationship(name, payload)
		  console.log('data: ', data)
          return (await data) as any //UserObject[]
  })

export const findAMemberHandler = createAsyncThunk(
    'properties/getMembers',
    async (

      ) => {


		let driver

		let results

		try {
		  driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
		  const serverInfo = await driver.getServerInfo()
		  console.log('Connection established')
		  console.log(serverInfo)
		} catch(err: any) {
		  console.log(`Connection error\n${err}\nCause: ${err.cause}`)
		}
		console.log('driver: ', driver)
		var session = driver.session();
	  
		session
		  .run('MATCH(a:Member) RETURN a')
		  .then(function(result: any){
			console.log('result: ', result)
			results = result
			return results
		  }) 
		  console.log('results: ', results)

	return


        //   const data = await getAllFamilyMembers()
		//   console.log('data from get all relatives: ', data)
        //   return (await data) as any //UserObject[]
  })

  export const deleteFamilyMemberHandler = createAsyncThunk(
    'properties/deleteMember',
    async (
        name,
		gender
      ) => {
          const data = await addFamilyMember(name, gender)
		  console.log('data: ', data)
          return (await data) as any //UserObject[]
  })

//reducer to manage a portion of client state:
const familySlice = createSlice({
    name: 'familyMembers',
    initialState: FamilyMembersState,
    reducers: {
		currentActionReducer: (state, payload) => {
			state.familyAction = payload.payload
		}
    },
    extraReducers: (builder) => {
        builder.addCase(addFamilyMemberHandler.pending, (state) => {
			state.loading = true
		})

		builder.addCase(addFamilyMemberHandler.fulfilled, (state, {payload}) => {
			state.loading = false
			console.log('fulfilled payload: ', payload)
		})

		builder.addCase(addFamilyMemberHandler.rejected, (state, {payload}) => {
			state.loading = false
			console.log('rejected payload: ', payload)
		})

		builder.addCase(findAMemberHandler.pending, (state) => {
			state.loading = true
		})

		builder.addCase(findAMemberHandler.fulfilled, (state, {payload}) => {
			state.loading = false
			console.log('all payload:', payload)
			// const familyMembers: any = []
			// payload && payload.map((user: UserObject) => {
			// 	familyMembers.push(user.address.city)
			// })
			// state.allFamilyMembers = familyMembers
		})

		builder.addCase(findAMemberHandler.rejected, (state, {payload}) => {
			state.loading = false
			console.log('rejected payload: ', payload)
		})
    }
})

export const setCurrentCategory = (familyAction: string) => (dispatch: any) => {
	dispatch(currentActionReducer(familyAction))
}

//state selectors to be called in components:
export const selectFamilyMembers = (state: any) => state.familyMembers

export const familyMembersSelector = createSelector(
	[selectFamilyMembers],
	state => state.allFamilyMembers
)

export const selectedFamilyActionSelector = createSelector(
	[selectFamilyMembers],
	state => state.familyAction
)

//export reducers for out of scope calls:
export const {
	currentActionReducer
} = familySlice.actions

//store export for rootReducer:
export default familySlice.reducer