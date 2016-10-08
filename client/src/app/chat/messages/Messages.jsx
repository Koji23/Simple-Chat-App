import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages, postMessage } from './messages_actions.js';
import MessageListEntry from './MessageListEntry.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchMessages();
  }
  handleSubmit (e, content) {
    e.preventDefault();
    let author = this.props.username;
    this.props.postMessage(content, author, this.props.messages.length + 1);
  }
  render () {
    let content = '';

    return (
      <div className="messages">
        <div className="subHeader">
        </div>
        <ul>
          { this.props.messages.map((msg, i) => {
            return (
              <MessageListEntry key={msg.id} i={i} data={msg}/>
            );
          })}
        </ul>
        <div className="reply">
          <form onSubmit={(e) => this.handleSubmit(e, content.value)}>
            <textarea ref={(node) => { content = node; }} placeholder="Enter Reply..."></textarea><br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    username: state.profile.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages, postMessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);