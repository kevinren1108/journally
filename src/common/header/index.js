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
    if(this.props.focused) {
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
              this.props.trendList.map((item,index) => {
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
    return ( 
    <HeaderWrapper> 
      <Logo/>
      <Nav>
        <NavItem className='left active'>Homepage</NavItem>
        <NavItem className='right'>Sign in</NavItem>
        <SearchWrapper>
          <NavSearch 
            onFocus={this.props.handleInputFocused}
            onBlur={this.props.handleInputBlur}
            className={this.props.focused ? 'focused' : ''}
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
    trendList: state.getIn(['header','trendList'])
    
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