import { combineReducers } from 'redux'
import user from './user'
import responseService from './responseService'
import viewForm from './viewForm'
import viewCalories from './viewCalories'

export default combineReducers({
  user,
  responseService,
  viewForm,
  viewCalories
})