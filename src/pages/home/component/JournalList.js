import React, { Component } from 'react';
import { JournalListWrapper, JournalListItem } from '../style'

class JournalList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <JournalListWrapper>
        <JournalListItem>
          1
        </JournalListItem>
        <JournalListItem>
          1
        </JournalListItem>
        <JournalListItem>
          1
        </JournalListItem>
        <JournalListItem>
          1
        </JournalListItem>
      </JournalListWrapper>
     );
  }
}
 
export default JournalList;