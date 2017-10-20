import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import StartPage from './components/pages/StartPage'
import AboutPage from './components/pages/AboutPage'
import Resources from './components/pages/Resources'
import GamePage from './components/pages/GamePage'

class Game extends React.Component {
  render() {
    return (
      <Router>
        <div className="stage">
          <Route exact path="/" component={StartPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/game" component={GamePage} />
        </div>
      </Router>
    );
  }
}

export default Game;
