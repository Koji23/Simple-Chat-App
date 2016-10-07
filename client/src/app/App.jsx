import React from 'react';

const App = (props) => {
  return (
    <div className="container">
      <header>
        <h1>TinyChat</h1>
      </header>
      <main>
        { props.children }
      </main>
      <footer>Jordan Chong</footer>
    </div>
  );
};

export default App;