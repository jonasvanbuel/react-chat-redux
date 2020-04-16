import React from 'react';

const Message = (props) => {
  const { message } = props;
  const { author, content, created_at } = message;
  const date = new Date(created_at);
  return (
    <div className="message">
      <div className="header">
        <p className="username">{author}</p>
        <p className="created-at">{date.toTimeString().slice(0, 8)}</p>
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export default Message;
