import React from 'react';

import NavBar from './navbar/NavBar.jsx';
import Chat from './chat/Chat.jsx';

const App = (props) => {
  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div>
        <Chat />
      </div>
      <footer><a href="bit.ly/linkedinjordan">Jordan Chong</a></footer>
    </div>
  );
};

export default App;