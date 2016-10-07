import React from 'react';

import NavBar from './navbar/NavBar.jsx';

const App = (props) => {
  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div>
        { props.children }
      </div>
      <footer>Jordan Chong</footer>
    </div>
  );
};

export default App;