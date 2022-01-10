import React, { Component } from 'react';
import JournalList from './component/JournalList';
import Recent from './component/Recent';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { actionCreator } from './store';
import { connect } from 'react-redux';

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

  componentDidMount() {
    this.props.handleFetchJournalAPI()
  }
}

const mapDispathToProps = (dispatch) => ({
  handleFetchJournalAPI() {
    dispatch(actionCreator.fetchJournalAPI());
  }
})

export default connect(null, mapDispathToProps)(Home);