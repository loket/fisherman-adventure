import React from 'react';


const Message = ({ text }) => {
  return (
    <div className="gameMessage">
      <span className="messageItem">{text}</span>
    </div>
  );
}

export default Message;
