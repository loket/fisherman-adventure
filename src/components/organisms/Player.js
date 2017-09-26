import React, { Component } from 'react';
import {
  WATER,
  FISH,
  ISLAND,
  PLAYER,
  STORM,
  SEAMONSTER,
  UP, DOWN, LEFT, RIGHT,
} from '../../Utils/Gamevariables';

class Player extends Component {

  state = {
    gameInfo: {
      shipPos: {
        shipRow: 0,
        shipColumn: 0,
      },
      message: 'You sail the open sea',
      action: null,
    },
    ROWS: this.props.items.length,
    COLUMNS: this.props.items[0].length,
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keydownHandler, false);
    this.setShip(this.props.items);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if(nextProps.endGame) {
      window.removeEventListener("keydown", this.keydownHandler, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keydownHandler, false);
  }

  setShip = obj => obj.map((row, index) => row.map((column, idx) => {
    switch(this.props.items[index][idx]) {
      case PLAYER:
        this.setState({
          gameInfo: {
            ...this.state.gameInfo,
            shipPos: {
              shipRow: index,
              shipColumn: idx,
            },
          },
        });
        return null;
        default:
        return null;
    }
  }));

  changeShipPosition(shipRow, shipColumn, row = 0, column = 0) {
    let newMap = [ ...this.props.map ];
    let newPos = [ ...this.props.items ];
    newPos[shipRow][shipColumn] = 0;
    this.setState({
      items: newPos,
      gameInfo: { ...this.state.gameInfo,
        shipPos: {
          shipRow: shipRow + row,
          shipColumn: shipColumn + column,
        },
        gold: this.props.gameInfo.gold - 10,
        food: this.props.gameInfo.food - 20,
      },
    });
    const newRow = this.state.gameInfo.shipPos.shipRow;
    const newColumn = this.state.gameInfo.shipPos.shipColumn;
    newPos[newRow][newColumn] = PLAYER;
    this.setState({
      items: newPos,
    });

    switch(this.props.map[newRow][newColumn])
    {
      case WATER:
      break;
      case SEAMONSTER:
        this.setState({
          gameInfo: { ...this.state.gameInfo,
            action: 'seamonster',
            message: 'Unreal you are fighting a seamonster',
          }
        });
        break;
      case ISLAND:
      this.setState({
        gameInfo: { ...this.state.gameInfo,
            action: 'trade',
            message: 'This is an island',
          }
        });
         break;
      case FISH:
        this.setState({
          gameInfo: { ...this.state.gameInfo,
            action: 'fish',
            message: 'This is a fish',
          }
        });
        newMap[newRow][newColumn] = 0;
        break;
      case STORM:
      this.setState({
        gameInfo: { ...this.state.gameInfo,
          action: 'storm',
          message: 'You are in the middle of a storm',
        }
      })
      break;
      default:
        return;
    }
    this.props.updateItems(this.state.gameInfo, newPos, newMap);
  }

  keydownHandler = (event) => {
    const { ROWS, COLUMNS } = this.state;
    const { shipRow, shipColumn } = this.state.gameInfo.shipPos;
    switch(event.keyCode)
    {
      case UP:
      if(shipRow > 0)
      {
        this.changeShipPosition(shipRow, shipColumn, -1, 0);
      }
      break;
      case DOWN:
        if(shipRow < ROWS - 1)
        {
          this.changeShipPosition(shipRow, shipColumn, 1, 0);
        }
        break;
      case LEFT:
      if(shipColumn > 0)
      {
          this.changeShipPosition(shipRow, shipColumn, 0, -1);
      }
      break;
      case RIGHT:
      if(shipColumn < COLUMNS - 1)
      {
        this.changeShipPosition(shipRow, shipColumn, 0, 1);
      }
      break;
      default:
      return;
    }
  }

  render() {
    return (
      <div className={['player', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Player;
