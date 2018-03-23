import { combineReducers } from 'redux'
import user from './user'
import responseService from './responseService'
import viewForm from './viewForm'
import viewCalories from './viewCalories'
import dailyLimitReducer from './dailyLimitReducer'
import calcCalories from './Calories'

export default combineReducers({
  user,
  responseService,
  viewForm,
  viewCalories,
  dailyLimitReducer,
  calcCalories
})