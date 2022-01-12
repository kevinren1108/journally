import React, { Component } from 'react';
import { DetailWrapper, DetailHeader, DetailContent } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store/index.js';
import { useParams } from 'react-router-dom';

function Detail(props) {
  props.getDetail()
  const { id } = useParams();

  return ( 
    <DetailWrapper>
      <DetailHeader>
        {props.detailJournalTitle}
      </DetailHeader>
      <DetailContent /*dangerouslySetInnerHTML={{__html: props.detailJournalContent}}*/>
        {props.detailJournalContent}
      </DetailContent>
    </DetailWrapper>
  );
};

const mapDispathToProps = (dispatch) => ({
  getDetail() {
    dispatch(actionCreator.getDetail())
  }
});

const mapStateToProps = (state) => {
  return {
    detailJournalTitle: state.getIn(['detail','detailJournalTitle']),
    detailJournalContent : state.getIn(['detail', 'detailJournalContent']),
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Detail);