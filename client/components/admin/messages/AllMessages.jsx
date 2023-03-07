import React from 'react';

function AllMessages({ mainOverlayShow, messagesData }) {
  console.log(messagesData.allMessages);
  const messagesDetails = messagesData.allMessages;

  return (
    <section className="message-center_all-messages pb-20 xsm:pt-8">
      <div className="section-top flex justify-between items-center mt-6">
        <h3 className="montserrat text-xl font-bold text--colors_secondary">Messages</h3>
        <div className="subscriber-count montserrat text-md font-bold text--colors_secondary">
          ({messagesDetails.length})
        </div>
      </div>
      <div className="messages flex flex-col gap-y-8 mt-4 md:w-full md:justify-between md:flex-wrap md:flex-row">
        {messagesDetails.map((each) => {
          const { name, createdAt, email, message, _id } = each;
          return (
            <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]" key={_id}>
              <div className="message-info text-[12px]">
                <div className="message mb-2  min-h-[100px]">{message}</div>
                <div className="sender-info text--colors_primary">
                  {name} | <span>{email}</span>
                </div>
                <div className="date text--colors_secondary text-[8px]">
                  {createdAt.slice(0, 10)}
                </div>
                <div className="button-wrappers flex gap-x-3">
                  <button
                    type="button"
                    className="msg-btn btn--outline px-4 py-2 mt-4 rounded"
                    onClick={mainOverlayShow}
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

export default AllMessages;
