import React from 'react';
import { connect } from 'react-redux';
import{
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './styls.js'

const Header = (props) => {
  return ( 
    <HeaderWrapper> 
      <Logo/>
      <Nav>
        <NavItem className='left active'>Homepage</NavItem>
        <NavItem className='right'>Sign in</NavItem>
        <NavSearch 
          onFocus={props.handleInputFocused}
          onBlur={props.handleInputBlur}
          className={props.focused ? 'focused' : ''}
        />
      </Nav>
      <Addition>
        <Button className='writting'>Write Journal</Button>
        <Button className='reg'>Register</Button>
      </Addition>
    </HeaderWrapper> 
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);