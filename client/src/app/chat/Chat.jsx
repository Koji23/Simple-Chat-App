import React from 'react';
import Conversations from './conversations/Conversations.jsx';
import Messages from './messages/Messages.jsx';
import Profile from './profile/Profile.jsx';

const Chat = (props) => {
  return (
    <main>
      <Conversations />
      <Messages />
      <Profile />
    </main>
  );
};

export default Chat;