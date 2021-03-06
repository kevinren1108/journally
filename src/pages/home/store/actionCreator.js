import axios from "axios"
import * as actionType from './actionType'

const changeJournalData = (data) => ({
  type: actionType.CHANGE_HOME_DATA,
  journalList: data
})

export const fetchJournalAPI = () => {
  return(dispatch) =>{
    axios.get('https://61d11b0ccd2ee50017cc9991.mockapi.io/api/list/journalList')
      .then( (res) => {
        const data = res.data
        const action = changeJournalData(data)
        dispatch(action)
      }).catch(() =>{
        console.log("API offline")
      })
  }
}

export const getMoreList = (page) => {
  page = page+1;
  return ({
    type: actionType.GET_MORE_LIST,
    nextPage: page
  })
} 

export const toggleTopShow = (bool) => {
  return ({
    type: actionType.TOGGLE_TOP_SHOW,
    bool: bool
  })
}