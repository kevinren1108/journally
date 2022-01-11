import axios from "axios"

export const getDetail = () => {
  return (dispatch) => {
    axios.get('https://61d11b0ccd2ee50017cc9991.mockapi.io/api/list/journalList')
      .then((res)=>{
        const result = res.data
        dispatch(changeDetail(result[0].title, result[0].journalContent))
      })
  }
}

const changeDetail = (title,content) => (
  {
  type: 'CHANGE_DETAIL',
  title,
  content
  }
)