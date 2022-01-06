import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionTypes.js'
import { actionCreators } from './store/index.js';
import{
  HeaderWrapper, Logo,
  Nav,NavItem,
  SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, 
  SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  Addition,
  Button,
} from './styls.js'


class Header extends Component {
  getListArea() {
    const { focused, trendList, searchTrendingPageIndex } = this.props
    const pageList = [];
    
    for(let i = (searchTrendingPageIndex-1*10); i< searchTrendingPageIndex*10; i++){
      pageList.push()
    }
    //https://www.youtube.com/watch?v=wUXBHCrRN14&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=60&ab_channel=JomyKing

    if(focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Trending
            <SearchInfoSwitch>
              Update
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              trendList.map((item,index) => {
                return <SearchInfoItem key={item+index}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  

  render() { 
    const { handleInputFocused, handleInputBlur , focused } = this.props
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
          {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>Write Journal</Button>
        <Button className='reg'>Register</Button>
      </Addition>
    </HeaderWrapper>  );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    //focused: state.get('header').get('focused') 
    trendList: state.getIn(['header','trendList']),
    searchTrendingPageIndex: state.getIn(['header','searchTrendingPage'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(actionCreators.getTrendList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);