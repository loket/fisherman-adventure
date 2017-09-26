import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GamePage from './components/pages/GamePage';
import StartPage from './components/pages/StartPage';
import AboutPage from './components/pages/AboutPage';
import ResourcePage from './components/pages/ReactResourcePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="stage">
          <Route exact path="/" component={StartPage} />
          <Route exact path="/Game" component={GamePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Resources" component={ResourcePage} />
        </div>
    </Router>
    );
  }
}

export default App;
