import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  if(action.type === actionType.CHANGE_LOGIN){
    return state.set('login',action.value)
  }
  if(action.type === actionType.LOG_OUT){
    return state.set('login', false)
  }
  return state;
};