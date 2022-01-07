import React, { Component } from 'react';
import JournalList from './component/JournalList';
import Recent from './component/Recent';
import { HomeWrapper, HomeLeft, HomeRight } from './style';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <JournalList />
        </HomeLeft>
        <HomeRight>
          <Recent/>
        </HomeRight>
      </HomeWrapper>
     );
  }
}
 
export default Home;