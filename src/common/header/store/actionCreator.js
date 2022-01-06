import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const updateTrendingList = (data) => ({
  type: 'update_trending_list',
  type: actionTypes.UPDATE_TRENDING_LIST,
  newTrendingList: fromJS(data),
  totalPage: Math.ceil(data.length /10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getTrendList = () => {
  return (dispatch) => {
    axios.get('https://61d11b0ccd2ee50017cc9991.mockapi.io/api/list/searchTrending')
      .then((res) => {
        const data = res.data;
        const dataList = [];
        for(var i = 0;i<data.length;i++) {
          dataList.push(data[i].itemName)
        }
        const action = updateTrendingList(dataList)
        dispatch(action);
      }
    ).catch(() =>{
      console.log("API offline")
    })
  }
}

export const searchTrendingMouseIn = () => ({
  type: actionTypes.UPDATA_MOUSE_IN
})

export const searchTrendingMouseOut = () => ({
  type: actionTypes.UPDATA_MOUSE_OUT
})

export const searchTrendingPageIndex = () => ({
  type: actionTypes.UPDATA_SEARCH_TRENDING_PAGE_INDEX
})