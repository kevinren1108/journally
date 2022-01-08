import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecentWrapper, RecentItem, RecentItemTitle, RecentWrapperTitle } from '../style'

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <RecentWrapper>
        Recent
        <RecentItem>
          <RecentItemTitle>
          Half of all people offered Moderna COVID-19 vaccine refuse it
          </RecentItemTitle>
        </RecentItem>
        <RecentItem>
          <RecentItemTitle>
          Could a new tax on homes worth $1M and up help fix Canada's housing crisis
          </RecentItemTitle>
        </RecentItem>
      </RecentWrapper>
     );
  }
}
 
export default Recent;