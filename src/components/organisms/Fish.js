import React, { Component } from 'react';
import '../../styles/gamemap.css';
import {
  maxFish,
  minFish,
} from '../../Utils/Gamevariables';

class Fish extends Component {

  state = {
    fishing: false,
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { action } = nextProps.gameInfo;
    if(action === 'fish' && !this.state.fishing) {
      this.fish(nextProps.gameInfo);
      this.setState({
        fishing: true,
      });
    } else {
      this.setState({
        fishing: false,
      });
    }
  }

  fish = gameInfo => {
    const fish = (Math.random() * maxFish);
    const totalFish = (gameInfo.experience + Math.ceil(Math.random() * 100)) / 100;
    const totalFished = minFish + (Math.ceil((totalFish > 1 ? 1 : totalFish) * fish));

    const message = `You fish all day ${totalFished} fish`;

    const newGameItem = {
      ...gameInfo,
      food: gameInfo.food + totalFished,
      experience: gameInfo.experience + 1,
      message,
    }

    this.props.updateItems(newGameItem);
  }

  render() {
    return (
      <div className={['fish', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Fish;
