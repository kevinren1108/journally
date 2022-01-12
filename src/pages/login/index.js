import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input } from './style.js'

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='Account' />
          <Input placeholder='Password' />
        </LoginBox>

      </LoginWrapper>
     );
  }
}
 
export default Login;