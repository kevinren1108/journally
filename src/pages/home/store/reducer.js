import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  journalList: [],
  journalListToDispaly: [],
  currentDisplayPage: 1,
  showBackTop: false
});

export default (state = defaultState, action) => {
  if(action.type === actionType.CHANGE_HOME_DATA){
    return state.set('journalList',fromJS(action.journalList))
  }
  if(action.type === actionType.GET_MORE_LIST){
    return state.set('currentDisplayPage',action.nextPage)
  }
  if(action.type === actionType.TOGGLE_TOP_SHOW){
    return state.set('showBackTop',action.bool)
  }

  return state;
}