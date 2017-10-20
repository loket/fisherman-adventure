import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import StartPage from './components/pages/StartPage'

class Game extends React.Component {
  render() {
    return (
      <Router>
        <div className="stage">
          <Route exact path="/" component={StartPage} />
        </div>
      </Router>
    );
  }
}

export default Game;
