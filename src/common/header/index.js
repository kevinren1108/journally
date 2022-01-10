import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import{
  HeaderWrapper, Logo,
  Nav,NavItem,
  SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, 
  SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  searchTrendingPageTotal,searchTrendingPageIndex,
  Addition,
  Button,
} from './styls.js'


class Header extends Component {
  getListArea() {
    const { focused, trendList, searchTrendingPageIndex, searchTrendingMouseInArea, 
            handleSearchTrendingMouseIn, handleSearchTrendingMouseOut, handleSearchTrendingPageIndex, 
            searchTrendingPageTotal} = this.props
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
            <SearchInfoSwitch onClick={() => handleSearchTrendingPageIndex(searchTrendingPageIndex,searchTrendingPageTotal)}>
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
      <Nav>
        <Logo/>
        <NavItem className='left active'>Homepage</NavItem>   
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
        <Button className='sign in'>Sign in</Button>
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
    searchTrendingPageTotal: state.getIn(['header','searchTrendingPageTotal']),   
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
    handleSearchTrendingPageIndex(page, totalPage) {
      if(page<totalPage){
        dispatch(actionCreators.searchTrendingPageIndex(page+1));
      }else{
        dispatch(actionCreators.searchTrendingPageIndex(1));
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);