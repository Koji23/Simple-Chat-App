import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import messageActions from './messages_actions.js';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    // this.props.fetchMessages();
  }
  render () {
    return (
      <div className="messages">
        <div className="subHeader">messages</div>
        <ul>
          
        </ul>
        <div className="reply">
          <form>
            <textarea placeholder="Enter Reply..."></textarea>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ fetchMessages }, dispatch);
  return {
    fetchMessages: () => {
      dispatch(messageActions.fetchMessages());
    },
  }
};

export default connect(null, mapDispatchToProps)(Messages);