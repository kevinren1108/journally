import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TypeWrapper, TypeItem, TypeItemTitle, TypeWrapperTitle } from '../style'

class Type extends Component {
  render() { 
    return ( 
      <TypeWrapper>
        Type
        { 
          this.props.journalList.map((item) => {
            return(
              <TypeItem key={item.get('id')}>
                <TypeItemTitle>{item.get('type')}</TypeItemTitle>
              </TypeItem>
            )
          })
        }
      </TypeWrapper>
     );
  }
}
 

const mapStateToProps = (state) => {
  return {
    journalList: state.getIn(['home','journalList']),

  }
}

export default connect(mapStateToProps, null)(Type);