import React, { Component } from 'react';
import '../../styles/gamemap.css';

class Island extends Component {

  state = {
    atBase: false,
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { action } = nextProps.gameInfo;
    if(action === 'trade' && !this.state.atBase) {
      this.trade(nextProps.gameInfo);
      this.setState({
        atBase: true,
      });
    } else {
      this.setState({
        atBase: false,
      });
    }
  }

  trade = gameInfo => {
    const islandOffer = gameInfo.experience + Math.ceil(Math.random() * 10);
    const sellFish = Math.ceil(gameInfo.food * 0.8);
    const message = `You sell ${sellFish} fish for ${islandOffer*sellFish}`

    const newGameItem = {
      ...gameInfo,
      gold: gameInfo.gold + (sellFish * islandOffer),
      experience: gameInfo.experience + 2,
      food: gameInfo.food - sellFish,
      message,
    }
    this.props.updateItems(newGameItem);
  }

  render() {
    return (
      <div className={['island', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Island;
