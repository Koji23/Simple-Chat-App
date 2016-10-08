import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editMessage } from './messages_actions.js';
import Linkify from 'react-linkify/dist/Linkify.js';

class MessageListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
    }
    this.handleSave = this.handleSave.bind(this);
  }
  handleEdit() {
    this.setState({
      editMode: true,
    });
  }
  handleSave(newContent) {
    this.props.data.content = newContent;
    this.props.data.timestamp = Date.now();
    this.props.editMessage(this.props.data, this.props.i);
    this.setState({
      editMode: false,
    })
  }
  render () {
    let content = '';
    return (
      <li className="messageListEntry">
        <div className="left">
          <img height="42" width="42" src="http://evansheline.com/wp-content/uploads/2011/02/facebook-Storm-Trooper.jpg" alt="profile_picture" />
        </div>
        <div className="right">
          <h3>{this.props.data.author}</h3>
          { 
            this.state.editMode ? 
            <textarea placeholder={this.props.data.content} ref={ node => content = node }></textarea> 
            : <Linkify>{this.props.data.content}</Linkify>
          }
          <div className="actions">
            { 
              this.state.editMode ? 
              <a href="#" onClick={ e => this.handleSave(content.value) } >Save</a> 
              : <a href="#" onClick={ this.handleEdit.bind(this) } >Edit</a> 
            }
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editMessage }, dispatch);
};

export default connect(null, mapDispatchToProps)(MessageListEntry);




