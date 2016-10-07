import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages, postMessage } from './messages_actions.js';
import MessageListEntry from './MessageListEntry.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchMessages();
    console.log(this.props.messages);
  }
  handleSubmit (e, content) {
    e.preventDefault();
    let author = 'Me';
    this.props.postMessage(content, author, this.props.messages.length + 1);
  }
  render () {
    let content = '';

    return (
      <div className="messages">
        <div className="subHeader">Messages</div>
        <ul>
          { this.props.messages.map(msg => {
            return (
              <MessageListEntry key={msg.id} content={msg.content} author={msg.author} timestamp={msg.timestamp} />
            );
          })}
        </ul>
        <div className="reply">
          <form onSubmit={(e) => this.handleSubmit(e, content)}>
            <textarea ref={(node) => { content = node; }} placeholder="Enter Reply..."></textarea>
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages, postMessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);