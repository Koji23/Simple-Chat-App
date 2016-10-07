import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages, postMessage } from './messages_actions.js';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchMessages();
    console.log(this.props.messages);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.postMessage();
  }
  componentWillReceiveProps() {
    console.log('****');
  }
  render () {
    return (
      <div className="messages">
        <div className="subHeader">Messages</div>
        <ul>
          { this.props.messages.map(msg => {
            return (
              <li key={msg.id} >
                <h3>{msg.author}</h3>
                <span>{msg.timestamp}</span>
                <div>{msg.content}</div>
              </li>
            );
          })}
        </ul>
        <div className="reply">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <textarea placeholder="Enter Reply..."></textarea>
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