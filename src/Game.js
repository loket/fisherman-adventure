import React from 'react';

import Tile from './components/atoms/tile'

const pattern = [
  [1,0,1],
  [0,1,0],
  [1,0,1],
];
const SIZE = 30, SPACE = 10;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'Hello',
    }
  }

  onChangeInput = (event) => {
    console.log("Changing value to " + event.target.value);
    this.setState({
      term: event.target.value,
    });
  }

  renderTile = (obj, index, idx) => (
    <Tile
      top={index * (SIZE + SPACE)}
      left={idx * (SIZE + SPACE)}
      backgroundColor={obj[index][idx] === 1 ? 'magenta' : 'cyan'}
    />
  );

  renderChecker = (obj) => (
    obj.map((rows, index) =>
    rows.map((column, idx) =>
    this.renderTile(obj, index, idx)
  )));

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onChangeInput}
        />
        <div className="checkersContainer">
          {this.renderChecker(pattern)}
        </div>
      </div>
    );
  }
}

export default Game;
