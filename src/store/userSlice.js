import {
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const MockedUsersInitialState = {
	loading: false,
	loggedIn: false,
	loggedInAdmin: false
}

//reducer:
const userSlice = createSlice({
    name: 'mockedUser',
    initialState: MockedUsersInitialState,
    reducers: {
        setLoggedInReducer: (state, payload) => {
			state.loggedIn = payload
		},
		setLoggedInAdminReducer: (state, payload) => {
			console.log('setLoggedInAdminReducer payload: ', payload)
			state.loggedInAdmin = payload.payload
		}
    },
    extraReducers: {}
})

//plain action creators:
export const mockedLogIn = loginPayload => dispatch => {
    {
		loginPayload.ship === 'Rebel Alliance Command' && 
		loginPayload.soldierclass === 'Regional' && 
		loginPayload.job === 'Ground Crew' && 
		loginPayload.soldier === '103' && 
		loginPayload.password === 'fancyPassword#1' 
		&& dispatch(setLoggedInReducer(true))}
}

export const mockedAdminLogIn = adminLogInPayload => dispatch => {
	console.log('adminLogInPayload: ', adminLogInPayload.adminCode)
	adminLogInPayload.adminCode === 'Security Clearance Code: Archive Governance' &&
	dispatch(setLoggedInAdminReducer(true))
}

export const selectMockedUser = (state) => state.user

//to be called in HOC around Outlet in routes:
export const loggedInStatusSelector = createSelector(
	[selectMockedUser],
	state => state.loggedIn
)

export const loggedInAdminStatusSelector = createSelector(
	[selectMockedUser],
	state => state.loggedInAdmin
)

export const {
	setLoggedInReducer,
	setLoggedInAdminReducer
} = userSlice.actions

//store export:
export default userSlice.reducer