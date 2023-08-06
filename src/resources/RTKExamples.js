import axios from 'axios'
const baseUrl = 'https://tipexfeedsapisr.azurewebsites.net/api/'
const baseCreateComp = 'https://comp-service-web.azurewebsites.net/api/'

//Races:
export const getMeetings = async date => {
	const meetingsList = await axios.get(`${baseUrl}Meetings?meetingDate=${date}`)
	return meetingsList.data
}

export const getNextToJumpList = async () => {
	const nextToJumpList = await axios.get(`${baseUrl}NextToJump`, /*{headers: {'Authorization' : `[Bearer] ${token}`}}*/)
	return nextToJumpList.data
}

import {
	createAsyncThunk, 
	createSlice
} from '@reduxjs/toolkit'
import concat from 'lodash/concat'
import * as utilities from './utilities'
import {createSelector} from 'reselect'
import {
	getMeetings,
	getNextToJumpList,
	getRaceCompetitors,
	getCurrentMeeting,
	getMeetingsRaces
} from '../../../../apis'

const RaceCenterInitialState = {
	loading: false,
	currentCompetition: '',
	nationalMeets: '',
	foreignMeets: '',
	nationalMeetsThoroughbred: '',
	nationalMeetsHarness: '',
	nationalMeetsGreyhound: '',
	foreignMeetsThoroughbred: '',
	foreignMeetsHarness: '',
	foreignMeetsGreyhound: '',
	noRecords: '',
	currentMeeting: '',
	otherMeetsTodayType: '',
	currentMeetingRaces: '',
	noOtherMeetingsRecords: false
}

export const getMeetingsList = createAsyncThunk(
  'racecenter/getMeetingsList',
  async ( 
		date
	) => {
		let meetingsList
		if (date !== 'nextToJump') {
			meetingsList = await getMeetings(date)
		}
		if (date === 'nextToJump') {
			meetingsList = await getNextToJumpList()
		}
		return meetingsList
  }
)

export const setCurrentMeetingFromRace = createAsyncThunk(
  'racecenter/setCurrentMeetingFromRace',
  async (
		raceId
	) => {
		const raceCompetitors = await getRaceCompetitors(raceId)
		const meetingId = await raceCompetitors[0].meetingId
		const currentMeeting = await getCurrentMeeting(meetingId)
		return currentMeeting
})

export const setOtherMeetsTodayCode = createAsyncThunk(
  'racecenter/setOtherMeetsTodayCode',
  async (
		currentMeeting
	) => {
		const newDate = new Date()
		const formattedDate = newDate.toISOString().slice(0,10)
		const currentDay = `${formattedDate}T00:00:00Z`
		const handledDate = currentMeeting.meetingDate !== undefined ? currentMeeting.meetingDate : currentDay
		const meetingsTodayAllCodes = await getMeetings(handledDate)
		return [meetingsTodayAllCodes, currentMeeting]
})

export const getCurrentMeetingRaces = createAsyncThunk(
	'racecenter/getCurrentMeetingRaces',
  async (
		meetingId
	) => {
	const meetingsRaces = await getMeetingsRaces(meetingId)
	return meetingsRaces
})

//reducer:
const raceCenterSlice = createSlice({
  name: 'racecenter',
  initialState: RaceCenterInitialState,
  reducers: {
		setCurrentCompetitionReducer: (state, payload) => {
			state.currentCompetition = payload.payload
		},
		setCurrentMeetingReducer: (state, payload) => {
			state.currentMeeting = payload.payload
		}
	},
	extraReducers: {
		[getMeetingsList.pending](state) {
			state.loading = true
		},

		[getMeetingsList.fulfilled](state, {payload}) {
			utilities.resetState(state)
			payload !== undefined && payload !== 'No records found.' ? (
				payload && payload.map(meetingReturned => {
					if (
						meetingReturned.meetingTrackCountry === 'AUS' || 
						meetingReturned.meetingTrackCountry === 'NZL' || 
						meetingReturned.meetingTrackCountry === 'HKG' ||
						meetingReturned.country === 'AUS' ||
						meetingReturned.country === 'NZL' ||
						meetingReturned.country === 'HKG'
						) {
						state.nationalMeets = concat(state.nationalMeets, meetingReturned)
						utilities.setNationalMeets(state, meetingReturned)
						state.noRecords = ''
					} else {
						state.foreignlMeets = concat(state.foreignlMeets, meetingReturned)
						utilities.setForeignMeets(state, meetingReturned)
						state.noRecords = ''
					}
				})
			) : (
				state.noRecords = 'No records found.'
			)
		},

		[getMeetingsList.rejected](state) {
			state.loading = false
		},

		[setCurrentMeetingFromRace.pending](state) {
			state.loading = true
		},

		[setCurrentMeetingFromRace.fulfilled](state, {payload}) {
			state.loading = false
			state.currentMeeting = payload[0]
		},

		[setCurrentMeetingFromRace.rejected](state) {
			state.loading = false
		},

		[setOtherMeetsTodayCode.pending](state) {
			state.loading = true
		},

		[setOtherMeetsTodayCode.fulfilled](state, {payload}) {
			state.loading = false
			state.otherMeetsTodayType = []
			payload[0] === undefined || payload[0] === null ? 
				state.noOtherMeetingsRecords = true : 
				payload[0] && payload[0].map(meet => {
					meet.meetingType === (payload[1] &&  payload[1].meetingType)
					&& meet.meetingTrackName !== (payload[1] &&  payload[1].meetingTrackName)
					&& (state.otherMeetsTodayType = concat(state.otherMeetsTodayType, meet))
					state.currentMeeting = payload[1]
					state.noOtherMeetingsRecords = false
				})
		},

		[setOtherMeetsTodayCode.rejected](state) {
			state.loading = false
			state.noOtherMeetingsRecords = true
		},

		[getCurrentMeetingRaces.pending](state) {
			state.loading = true
		},

		//for list of other races in circles to click for runners:
		[getCurrentMeetingRaces.fulfilled](state, {payload}) {
			state.loading = false
			state.currentMeetingRaces = []
			payload !== 'No records found.' ? (
				payload && payload.map((race, index) => {
					state.currentMeetingRaces = concat(state.currentMeetingRaces, utilities.raceWithIndex(
						race, 
						index
					))
					state.noRecords = ''
				})
			) : (
				state.noRecords = 'No records found.'
			)
		},

		[getCurrentMeetingRaces.rejected](state) {
			state.loading = false
		}
	}
})

//plain action creators:
export const setCurrentMeeting = currentMeeting => dispatch => {
	dispatch(setCurrentMeetingReducer(currentMeeting))
}

export const setCurrentRaceCompetition = competition => dispatch => {
	dispatch(setCurrentCompetitionReducer(competition))
}

//selectors:
export const selectRaceCenter = (state) => state.racecenter

export const entireStateSelector = createSelector(
	[selectRaceCenter],
	state => state
)

export const noRecordsSelector = createSelector(
	[selectRaceCenter],
	state => state.noRecords
 )

export const selectCurrentCompetition = createSelector(
	[selectRaceCenter],
	state => state.currentCompetition
)

export const selectCurrentMeeting = createSelector(
	[selectRaceCenter],
	state => state.currentMeeting
)

export const selectOtherMeetsCode = createSelector(
	[selectRaceCenter],
	state => state.otherMeetsTodayType
)

export const selectMeetingRaces = createSelector(
	[selectRaceCenter],
	state => state.currentMeetingRaces
)

export const selectLoadingStatus = createSelector(
	[selectRaceCenter],
	state => state.loading
)

export const noOtherMeetingsRecordsSelector = createSelector(
	[selectRaceCenter],
	state => state.noOtherMeetingsRecords
)

export const {
	setCurrentCompetitionReducer,
	setCurrentMeetingReducer
} = raceCenterSlice.actions

//store export:
export default raceCenterSlice.reducer