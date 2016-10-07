import React from 'react';

const MessageListEntry = (props) => {
  return (
    <li className="messageListEntry">
      <h3>{props.author}</h3>
      <span>{props.timestamp}</span>
      <div>{props.content}</div>
    </li>
  );
}

export default MessageListEntry;