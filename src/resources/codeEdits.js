
//https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error
      }
    })
  },
})










<div style={{ textAlign: "justify" }}>
<form>
  <label>Email</label>
  <input type="email" />
  <label>Password</label>
  <input type="password" />
  <Button onClick={() => handleLogin()}>Enter</Button>
</form>
</div>


import { setCurrentProperty, selectedPropertySelector } from '../../store/propertySlice'


const currentSelectedProperty = useSelector(selectedPropertySelector)






<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
enableReinitialize={false}
>
{formik => {

  const toggleMopedsHandler = () => {
    setShownSettings(!shownSettings)
  }

  const setMopedHandler = e => {
    formik.setFieldValue('Moped', e)
    if (e === 'by Moped') {
      formik.setFieldValue('Moped', formik.initialValues['Moped'])
      formik.setFieldValue('Moped', formik.initialValues['Moped'])
      formik.setFieldValue('Moped', formik.initialValues['Moped'])
    }
    if (e === 'by Moped') {
      formik.setFieldValue('Moped', [])
      formik.setFieldValue('Moped', [])
      formik.setFieldValue('Moped', [])
    }
  }

  const checkErrors = async () => {
    console.log('checkErrors called')
    await setContinueClick(true)
    console.log('api called with: ', formik)
    if (!formik.errors.Moped
    && !formik.errors.Moped
    && !formik.errors.Moped){
      //const newComp = formik.values
      //await dispatch(createMopedHandler(newMoped))
      //await dispatch(setMopedSelectedOption('2'))
      console.log('api called with: ', formik)
    }
  }

  return (
    <>
        <Form>

            <DropdownField
            formik={formik}
            continueMoped={continueMoped}
            options={Moped}
            MopedType='Moped'
            setSelectedMoped={e => setMopedHandler(e)}
            label='Moped Start*'
            placeholder={null}
            name='startMoped'
            type='text'
            style='closed'
            borderColor={MopedTheme[0]}
            labelColor={MopedTheme[1]}
            />

        </Form>

        <img src={Apartments} />
    </>

    )
  }}
</Formik>



//https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore

import {
	createAsyncThunk, 
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {getUsers} from '../apisNotes/db'

const PropertiesInitialState = {
	loading: false,
	properties: ['No properties found.'],
    selectedProperty: 'Welcome! Pick a Category to Begin!'
}

export const getUsersHandler = createAsyncThunk(
    'properties/getUsers',
    async (
        
      ) => {
          const users = await getUsers()
		  //This works fine:
		  console.log('users: ', users.data)
          return users
  })

//reducer:
const propertySlice = createSlice({
    name: 'properties',
    initialState: PropertiesInitialState,
    reducers: {
        setCurrentPropertyReducer: (state, payload) => {
			state.selectedProperty = payload.payload
		}
    },
    extraReducers: {
        [getUsers.pending](state) {
			state.loading = true
		},

		[getUsers.fulfilled](state, {payload}) {
			state.loading = false
			console.log('payload: ', payload)
		},

		[getUsers.rejected](state) {
			state.loading = false
		}
    }
})

//plain action creators:
export const setCurrentProperty = currentProperty => dispatch => {
	dispatch(setCurrentPropertyReducer(currentProperty))
}

export const selectProperties = (state) => state.properties

export const propertiesSelector = createSelector(
	[selectProperties],
	state => state.properties
)

export const selectedPropertySelector = createSelector(
	[selectProperties],
	state => state.selectedProperty
)

export const {
	setCurrentPropertyReducer
} = propertySlice.actions

//store export:
export default propertySlice.reducer