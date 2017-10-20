
import React from 'react';


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

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onChangeInput} />
      </div>
    );
  }
}

export default Game;
