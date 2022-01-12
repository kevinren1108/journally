import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store/index.js';
import { actionCreator as loginActionCreator } from '../../pages/login/store';
import{
  HeaderWrapper, Logo,
  Nav,NavItem,
  SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, 
  SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  searchTrendingPageTotal,searchTrendingPageIndex,
  Addition,
  Button,
} from './styls.js'

var loginButton
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
  /*
  need update this function, change class component to 
  function component and use reactjsv17 hook. 
  useLayoutEffect()
  */
  UNSAFE_componentWillMount(){
    this.props.handleFetchSearchTrendingAPI()
  }

  componentDidMount(){
    //this.props.handleFetchSearchTrendingAPI()
  }  

  render() { 
    const { handleInputFocused, handleInputBlur , focused, loginState, handleLogOut } = this.props
    return ( 
    <HeaderWrapper>       
      <Nav>
        <Link to='/'>
          <Logo/>
        </Link>
        
        <Link to='/'><NavItem className='left active'>Homepage</NavItem> </Link>  
        <SearchWrapper>
          <NavSearch 
            onFocus={handleInputFocused}
            onBlur={handleInputBlur}
            className={focused ? 'focused' : ''}
          />
          {this.getListArea()}
        </SearchWrapper>
      </Nav>   
      {
        loginState ? 
          <Addition><Button onClick={handleLogOut} className='log out'>Log out</Button><Button className='writting'>Write Journal</Button></Addition> :
          <Addition><Link to='/login'><Button className='login'>Log in</Button></Link><Button className='reg'>Register</Button></Addition>
      } 
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
    searchTrendingMouseInArea: state.getIn(['header','searchTrendingMouseIn']),
    loginState: state.getIn(['loginState','login'])
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
    },

    handleLogOut() {
      dispatch(loginActionCreator.logOut());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);