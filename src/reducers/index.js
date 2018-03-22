import { combineReducers } from 'redux'
import user from './user'
import responseService from './responseService'
import viewForm from './viewForm'

export default combineReducers({
  user,
  responseService,
  viewForm
})