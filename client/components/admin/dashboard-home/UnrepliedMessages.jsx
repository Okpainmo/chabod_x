import React, { useContext } from 'react';
import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';

function UnrepliedMessages({ messagesData }) {
  // console.log(messagesData);

  const { mainOverlayShow, replyMailFormShow } = useContext(GlobalAdminContext);
  return (
    <section className="new-messages my-12">
      <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">
        Unreplied messages
      </h3>
      <div className="messages flex flex-col gap-y-6 mt-4 md:w-full md:justify-between md:flex-wrap md:flex-row">
        {messagesData.allMessages.map((each) => {
          const { _id: id, message, name, email } = each;
          return (
            <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]" key={id}>
              <div className="message-info text-[12px]">
                <div className="message mb-2 min-h-[80px]">{message}</div>
                <div className="sender-info text--colors_primary">
                  {name} | <span>{email}</span>
                </div>
                <div className="date text--colors_secondary">25th June 2029</div>
                <div className="button-wrappers flex gap-x-3">
                  <button
                    type="button"
                    className="msg-btn btn--outline px-4 py-2 mt-4 rounded"
                    onClick={() => {
                      mainOverlayShow();
                      replyMailFormShow();
                    }}
                  >
                    reply
                  </button>
                  <button type="button" className="msg-btn btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UnrepliedMessages;
