import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  detailJournalTitle: '',
  detailJournalContent: '',
  
});

export default (state = defaultState, action) => {
  if(action.type === actionType.CHANGE_DETAIL){
    return state.merge({
      detailJournalTitle: action.title,
      detailJournalContent: action.content
    })
  }
  return state;
}