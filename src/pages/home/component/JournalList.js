import { getIn } from 'immutable';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { JournalListWrapper, JournalListItem,
         JournalListItemTitle, JournalListItemAbstract,
         LoadMore } from '../style'
import * as actionCreator from '../store/actionCreator';
import { Link } from 'react-router-dom';

class JournalList extends PureComponent {
  render() { 
    const { getMoreList,page } = this.props
    return ( 
      <JournalListWrapper>
        { 
          this.props.journalList.map((item) => {
            return(
             
              <JournalListItem key={item.get('id')}>
                <JournalListItemTitle>{item.get('title')}</JournalListItemTitle>
                <JournalListItemAbstract>{item.get('journalContent')}</JournalListItemAbstract>
              </JournalListItem>
              
            )
          })
        }
        <LoadMore onClick={ () => getMoreList(page)}>Load more</LoadMore>
      </JournalListWrapper>
     );
  }
}

const mapDispathToProps = (dispatch) => {
  return{
    getMoreList(page) {
      const action = actionCreator.getMoreList(page)
      dispatch(action)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    journalList: state.getIn(['home','journalList']),
    journalListToDisplay : state.getIn(['home', 'journalListToDispaly']),
    page: state.getIn(['home','currentDisplayPage'])
  }
}

export default connect(mapStateToProps, mapDispathToProps)(JournalList);