import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  journalList: []
});

export default (state = defaultState, action) => {
  if(action.type === actionType.CHANGE_HOME_DATA){
    console.log('123')
    return state.set('journalList',fromJS(action.journalList))
  }
  return state;
}