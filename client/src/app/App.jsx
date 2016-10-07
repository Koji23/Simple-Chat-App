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
      <footer>Jordan Chong</footer>
    </div>
  );
};

export default App;