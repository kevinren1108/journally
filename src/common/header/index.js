import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionTypes.js'
import{
  HeaderWrapper, Logo,
  Nav,NavItem,
  SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, 
  SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  Addition,
  Button,
} from './styls.js'

const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          Trending
          <SearchInfoSwitch>
            Update
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>LifeStyle</SearchInfoItem>
          <SearchInfoItem>Journal</SearchInfoItem>
          <SearchInfoItem>Journal</SearchInfoItem>
          <SearchInfoItem>Journal</SearchInfoItem>
          <SearchInfoItem>Journal</SearchInfoItem>
          <SearchInfoItem>Journal</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }else {
    return null;
  }
}

const Header = (props) => {
  const {handleInputFocused,handleInputBlur,focused} = props
  return ( 
    <HeaderWrapper> 
      <Logo/>
      <Nav>
        <NavItem className='left active'>Homepage</NavItem>
        <NavItem className='right'>Sign in</NavItem>
        <SearchWrapper>
          <NavSearch 
            onFocus={handleInputFocused}
            onBlur={handleInputBlur}
            className={focused ? 'focused' : ''}
          />
          {getListArea(focused)}
        </SearchWrapper>
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
    focused: state.getIn(['header','focused'])
    //focused: state.get('header').get('focused') 
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused() {
      const action = {
        type: actionTypes.SEARCH_FOCUS
      };
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: actionTypes.SEARCH_BLUR
      };
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);