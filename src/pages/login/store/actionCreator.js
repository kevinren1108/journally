import axios from "axios"
import * as actionType from './actionType'

const changeLogin = () => (
  {
  type: actionType.CHANGE_LOGIN,
  value: true
})

export const login = (account,password) =>{
  return (dispatch) => {
    axios.get('https://61d11b0ccd2ee50017cc9991.mockapi.io/api/list/accounts?userName='+account+'&passWord='+password)
      .then((res)=>{
        if(res){
          
          dispatch(changeLogin())
        }else{
          alert('login fail')
        }
      })
  }
}

export const logOut = () => ({
  type: actionType.LOG_OUT
})

