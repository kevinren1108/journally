import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Write extends PureComponent {
  
  render() { 
    const {loginState} = this.props

    if(loginState){
      return ( 
        <div>write</div>
       )
    }else{
      return <Navigate to='/login' />
    }
  }
};
 
const mapDispathToProps = (dispatch) => ({
  
});

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['loginState','login'])
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Write);