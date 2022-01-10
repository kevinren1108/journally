import React, { Component } from 'react';
import { connect } from 'react-redux';
import { JournalListWrapper, JournalListItem,
         JournalListItemTitle, JournalListItemAbstract } from '../style'

class JournalList extends Component {
  render() { 
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
      </JournalListWrapper>
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
    journalList: state.getIn(['home','journalList']),

  }
}

export default connect(mapStateToProps, null)(JournalList);