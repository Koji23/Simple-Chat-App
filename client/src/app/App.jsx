import React from 'react';
import Conversations from '../conversations/Conversations.jsx';
import Messages from '../messages/Messages.jsx';
import Settings from '../profile/Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  componentWillMount() {
    
  }
  
  render () {
    return (
      <div className="container">
        <header>
          <h1>TinyChat</h1>
          <span className="glyphicon glyphicon-bullhorn"></span>
          <span className="glyphicon glyphicon-globe"></span>
          <span className="glyphicon glyphicon-heart"></span>
        </header>
        <main>
          <Conversations />
          <Messages />
          <Settings />
        </main>
        <footer></footer>
      </div>
    );
  }
};

export default App;