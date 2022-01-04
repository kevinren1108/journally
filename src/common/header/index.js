import React, { Component } from 'react';
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
        <NavSearch />
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

  }
}

const mapDispathToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);