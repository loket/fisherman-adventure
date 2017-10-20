import React from 'react';

const Tile = ({top, left, backgroundColor}) => (
  <div
  className="cell"
    style={{
      top: top + 'px',
      left: left + 'px',
      backgroundColor: backgroundColor,
    }}
  />
);

export default Tile;
