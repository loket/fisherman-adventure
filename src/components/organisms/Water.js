import React, { Component } from 'react';
import '../../styles/gamemap.css';

class Water extends Component {

  render() {
    return (
      <div className={['water', 'cell'].join(' ')} style={{ top: this.props.top, left: this.props.left }} />
    );
  }
}

export default Water;
