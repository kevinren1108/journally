import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style.js'
import * as actionCreator from './store/actionCreator'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {loginState} = this.props

    if(!loginState){
      return ( 
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='Account' ref={(input) => {this.account = input}} />
            <Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={ () => this.props.login(this.account,this.password)}> Login </Button>
          </LoginBox>
  
        </LoginWrapper>
       )
    }else{
      return <Navigate to='/' />
    }

    
  }
}
 
const mapDispathToProps = (dispatch) => ({
  login(accountElem,passwordElem){
    dispatch(actionCreator.login(accountElem.value,passwordElem.value))
    
  }
})

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['loginState','login'])
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);