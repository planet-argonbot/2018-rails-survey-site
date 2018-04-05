import React, { Component } from 'react';
import Share from './Share';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>2018 Ruby on Rails Developer<br/>
          Community Survey</h1>
          <h3>The results are in!</h3>
          <p>2002 members of the rails community gave us their thoughts on tools, frameworks, and workflows in order to see how the environment has changed.</p>
        </div>
          <Share/>
        <div className="container">
          <h2>Demographics</h2>
          <p>Here are some stats examples if we want to do quick stats</p>
        </div>
      </div>
    );
  }
}

export default App;
