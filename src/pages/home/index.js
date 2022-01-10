import React, { Component } from 'react';
import JournalList from './component/JournalList';
import Recent from './component/Recent';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreator } from './store';
import { connect } from 'react-redux';

class Home extends Component {
  render() { 
    const {scrollTop, showBackTop} = this.props
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <JournalList />
        </HomeLeft>
        <HomeRight>
          <Recent/>
        </HomeRight>
        { showBackTop ? <BackTop onClick={scrollTop}>BackTop</BackTop> : null}
      </HomeWrapper>
     );
  }

  componentDidMount() {
    this.props.handleFetchJournalAPI()
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll' , this.props.handleScrollTop)
  }
}

const mapStateToProps = (state) => {
  return {
    showBackTop: state.getIn(['home','showBackTop'])
  }
}

const mapDispathToProps = (dispatch) => ({
  handleFetchJournalAPI() {
    dispatch(actionCreator.fetchJournalAPI());
  },
  scrollTop() {
    window.scrollTo(0,0)
  },
  handleScrollTop() {
    if( document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.toggleTopShow(true))
    }else{
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Home);