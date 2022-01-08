import React, { Component } from 'react';
import { connect } from 'react-redux';
import { JournalListWrapper, JournalListItem,
         JournalListItemTitle, JournalListItemAbstract } from '../style'

class JournalList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
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

const mapDispathToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispathToProps)(JournalList);