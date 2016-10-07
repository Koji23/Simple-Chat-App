import React from 'react';
import Conversations from './conversations/Conversations.jsx';
import Messages from './messages/Messages.jsx';
import Settings from './profile/Profile.jsx';

const Chat = (props) => {
  return (
    <main>
      <Conversations />
      <Messages />
      <Settings />
    </main>
  );
};

export default Chat;