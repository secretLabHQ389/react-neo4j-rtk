import { combineReducers } from '@reduxjs/toolkit'
import familyReducer from './databaseSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
    familyMembers: familyReducer,
    user: userReducer
  })
  
  export default rootReducer