import React, { Component } from 'react';

class Storm extends Component {

  state = {
    storm: false,
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { action } = nextProps.gameInfo;
    if(action === 'storm' && !this.state.storm) {
      this.storm(nextProps.gameInfo);
      this.setState({
        storm: true,
      });
    } else {
      this.setState({
        storm: false,
      });
    }
  }

  storm = gameInfo => {
    const damage = Math.ceil(Math.random() * 100);

    const message = `Heavy storm, cost for repair ${damage} gold`;

    const newGameItem = {
      ...gameInfo,
      gold: gameInfo.gold - damage,
      experience: gameInfo.experience - 1,
      message,
    }
    this.props.updateItems(newGameItem);
  }

  render() {
    return (
        <div className={['storm', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Storm;
