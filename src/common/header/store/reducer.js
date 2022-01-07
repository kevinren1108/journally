import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  trendList: [],
  searchTrendingPage: 1,
  searchTrendingPageTotal: 1,
  searchTrendingMouseIn: false
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    return state.set('focused',true)
  }
  if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused',false)
  }
  if(action.type === actionTypes.UPDATE_TRENDING_LIST){
    const newState = state.merge({
      trendList: action.newTrendingList,
      searchTrendingPageTotal: action.totalPage
    })
    return newState
  }
  if(action.type === actionTypes.UPDATA_MOUSE_IN){
    return state.set('searchTrendingMouseIn',true)
  }
  if(action.type === actionTypes.UPDATA_MOUSE_OUT){
    return state.set('searchTrendingMouseIn',false)
  }
  if(action.type === actionTypes.UPDATA_SEARCH_TRENDING_PAGE_INDEX){
    return state.set('searchTrendingPage',action.newPage)
  }
  return state;
}