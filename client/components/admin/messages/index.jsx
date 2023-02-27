import React from 'react';
import AllMessages from './AllMessages';
// import NewMessages from '../dashboard-home/NewMessages';

function Messages({ mainOverlayShow, messagesData }) {
  return <AllMessages mainOverlayShow={mainOverlayShow} messagesData={messagesData} />;
}

export default Messages;
