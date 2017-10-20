import React from 'react';

const Infobar = ({gold, food, experience}) => (
  <div className="infobar">
    <span className="infoItem">{`Gold: ${gold}`}</span>
    <span className="infoItem">{`Food: ${food}`}</span>
    <span className="infoItem">{`XP: ${experience}`}</span>
  </div>
);

export default Infobar;
