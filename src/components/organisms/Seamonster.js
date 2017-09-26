import React, { Component } from 'react';

class Seamonster extends Component {

  state = {
    seamonster: false,
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { action } = nextProps.gameInfo;
    if(action === 'seamonster' && !this.state.seamonster) {
      this.seamonster(nextProps.gameInfo);
      this.setState({
        seamonster: true,
      });
    } else {
      this.setState({
        seamonster: false,
      });
    }
  }

  seamonster = gameInfo => {
    const message = 'This is unfortunate, you have eaten by a seamonster';

    const newGameItem = {
      ...gameInfo,
      endGame: true,
      message,
    }
    this.props.updateItems(newGameItem);
  }

  render() {
    return (
      <div className={['seamonster', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Seamonster;
