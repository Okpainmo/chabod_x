import React from 'react';
import AllMessages from './AllMessages';
// import NewMessages from '../dashboard-home/NewMessages';

function Messages({ messagesData }) {
  return <AllMessages messagesData={messagesData} />;
}

export default Messages;
