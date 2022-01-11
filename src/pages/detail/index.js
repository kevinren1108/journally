import React, { Component } from 'react';
import { DetailWrapper, DetailHeader, DetailContent } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store/index.js';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <DetailWrapper>
        <DetailHeader>
          {this.props.detailJournalTitle}
        </DetailHeader>
        <DetailContent dangerouslySetInnerHTML={{__html: this.props.detailJournalContent}} />
      </DetailWrapper>
     );
  }

  componentDidMount() {
    this.props.getDetail();
  }
}

const mapDispathToProps = (dispatch) => ({
  getDetail() {
    dispatch(actionCreator.getDetail())
  }
})

const mapStateToProps = (state) => {
  return {
    detailJournalTitle: state.getIn(['detail','detailJournalTitle']),
    detailJournalContent : state.getIn(['detail', 'detailJournalContent']),
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Detail);