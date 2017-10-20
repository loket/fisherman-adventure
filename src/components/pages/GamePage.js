import React, { Component } from 'react';
import '../../styles/gamemap.css';
import Water from '../organisms/Water';
import Fish from '../organisms/Fish';
import Storm from '../organisms/Storm';
import Seamonster from '../organisms/Seamonster';
import Island from '../organisms/Island';
import Player from '../organisms/Player';
import {
  MAP, ITEMS, FISH, ISLAND,
  PLAYER, STORM, SEAMONSTER,
  food, gold, experience, SIZE,
} from '../../Utils/Gamevariables';
//import Message from '../molecules/Message';
//import Infobar from '../molecules/Infobar';

let message = "Go find fortune and fame with the arrow keys";

class GamePage extends Component {
  state = {
    map: MAP,
    items: ITEMS,
    gameInfo: {
      gold,
      message,
      food,
      experience,
      endGame: false,
    },
  };

  updateItem = (gameInfo, items = this.state.items, map = this.state.map) => {
    this.setState({
      map,
      items,
      gameInfo: { ...this.state.gameInfo, ...gameInfo },
    });
    if(this.state.gameInfo.endGame) {
      this.endGame();
    }
  }

  endGame = () => {
    console.log("game has ended");
  }

  renderTile = (item, row, column) => {
    switch(item[row][column]) {
      case FISH:
        return <Fish
          top={row * SIZE}
          left={column * SIZE}
          gameInfo={this.state.gameInfo}
          map={this.state.map}
          updateItems={(gameInfo) => this.updateItem(gameInfo)}
        />;
      case STORM:
        return <Storm   top={row * SIZE}
          left={column * SIZE}
          gameInfo={this.state.gameInfo}
          updateItems={(gameInfo) => this.updateItem(gameInfo)}
        />
      case SEAMONSTER:
        return <Seamonster
          top={row * SIZE}
          left={column * SIZE}
          gameInfo={this.state.gameInfo}
          updateItems={(gameInfo) => this.updateItem(gameInfo)}
        />;
      case ISLAND:
        return <Island
          top={row * SIZE}
          left={column * SIZE}
          gameInfo={this.state.gameInfo}
          updateItems={(gameInfo) => this.updateItem(gameInfo)}
        />;
      case PLAYER:
        return <Player
          top={row * SIZE}
          left={column * SIZE}
          items={this.state.items}
          map={this.state.map}
          gameInfo={this.state.gameInfo}
          endGame={this.state.gameInfo.endGame}
          updateItems={(gameInfo, items, map) => this.updateItem(gameInfo, items, map)}
        />;
      default:
        return <Water top={row * SIZE} left={column * SIZE} />;
    }
  }

  createTiles = obj => obj.map((rows, index) => rows.map((column, idx) => this.renderTile(obj, index, idx)));

  render() {
    const { food, gold, experience } = this.state.gameInfo;
    return (
      <div>
        <div id='game'>
          {this.createTiles(this.state.map)}
          {this.createTiles(this.state.items)}
        </div>
      </div>
    );
  }
}

export default GamePage;
