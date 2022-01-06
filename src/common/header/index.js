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
    const { focused, trendList, searchTrendingPageIndex, searchTrendingMouseInArea, 
            handleSearchTrendingMouseIn, handleSearchTrendingMouseOut, handleSearchTrendingPageIndex} = this.props
    const jsTrendingList = trendList.toJS();
    if(focused || searchTrendingMouseInArea) {  
      const currentDisplaySearchTrendList = [];
      for(let i = ((searchTrendingPageIndex-1)*10); i< searchTrendingPageIndex*10; i++){
        currentDisplaySearchTrendList.push(<SearchInfoItem key={jsTrendingList[i]+i}>{jsTrendingList[i]}</SearchInfoItem>)
      }
      return (
        <SearchInfo 
          onMouseEnter={handleSearchTrendingMouseIn} 
          onMouseLeave={handleSearchTrendingMouseOut}
        >
          <SearchInfoTitle>
            Trending
            <SearchInfoSwitch onClick={handleSearchTrendingPageIndex}>
              Update
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {currentDisplaySearchTrendList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  componentDidMount(){
    this.props.handleFetchSearchTrendingAPI()
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
    searchTrendingPageIndex: state.getIn(['header','searchTrendingPage']),
    searchTrendingMouseInArea: state.getIn(['header','searchTrendingMouseIn'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleFetchSearchTrendingAPI() {
      dispatch(actionCreators.getTrendList());
    },
    handleSearchTrendingMouseIn() {
      dispatch(actionCreators.searchTrendingMouseIn());
    },
    handleSearchTrendingMouseOut() {
      dispatch(actionCreators.searchTrendingMouseOut());
    },
    handleSearchTrendingPageIndex() {
      dispatch(actionCreators.searchTrendingPageIndex());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);