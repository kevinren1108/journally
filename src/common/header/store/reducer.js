import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  trendList: [],
  searchTrendingPage: 1,
  searchTrendingPageTotal: 1
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    return state.set('focused',true)
  }
  if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused',false)
  }
  if(action.type === actionTypes.UPDATE_TRENDING_LIST){
    const tempState = JSON.parse(JSON.stringify(state));
    /*for(var i = 0;i<action.newTrendingList.length;i++){
      console.log(action.newTrendingList[i].itemName)
      tempState.list.push(action.newListFromAPI[i].item)
    }*/
    const newState = state.set('trendList',action.newTrendingList).set('searchTrendingPageTotal', action.totalPage);
    return newState
  }
  return state;
}