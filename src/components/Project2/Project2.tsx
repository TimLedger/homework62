import React from 'react';
import ChatMessages from './ChatMessages';
import './Project2.css';

const Chat: React.FC = () => {
  return (
    <div className="chat-container">
      <main>
        <ChatMessages />
      </main>
    </div>
  );
};

export default Chat;

