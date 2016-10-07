import React from 'react';

const Conversations = (props) => {
  return (
    <div className="conversations">
      <div className="subHeader">
        <div><a href="#">Recent</a></div>
        <div><a href="#">Unread</a></div>
        <div className="dropDown" >
          <button>Sort</button>
          <ul>
            <li>Time</li>
            <li>Name</li>
          </ul>
        </div>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="search friends..." />
      </div>
      <ul >
        
      </ul>
    </div>
  );
};

export default Conversations;