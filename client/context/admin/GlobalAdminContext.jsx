import React, { createContext, useState } from 'react';

export const GlobalAdminContext = createContext();

function GlobalAdminContextProvider({ children }) {
  const [showMainOverlay, setShowMainOverlay] = useState(false);

  const mainOverlayHide = () => {
    setShowMainOverlay(false);
  };

  const mainOverlayShow = () => {
    setShowMainOverlay(true);
  };

  const [showReplyMailForm, setShowReplyMailForm] = useState(false);

  const replyMailFormHide = () => {
    setShowReplyMailForm(false);
  };

  const replyMailFormShow = () => {
    setShowReplyMailForm(true);
  };

  return (
    <GlobalAdminContext.Provider
      value={{
        showMainOverlay,
        mainOverlayHide,
        mainOverlayShow,
        showReplyMailForm,
        replyMailFormHide,
        replyMailFormShow
      }}
    >
      {children}
    </GlobalAdminContext.Provider>
  );
}

export default GlobalAdminContextProvider;
