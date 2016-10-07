import React from 'react';

const Messages = (props) => {
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
};

export default Messages;