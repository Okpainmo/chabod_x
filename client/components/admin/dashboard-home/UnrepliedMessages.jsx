import React from 'react';

function UnrepliedMessages({ mainOverlayShow }) {
  return (
    <section className="new-messages my-12">
      <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">
        Unreplied messages
      </h3>
      <div className="messages flex flex-col gap-y-6 mt-4 md:w-full md:justify-between md:flex-wrap md:flex-row">
        <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="message-info text-[12px]">
            <div className="message mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit cupiditate nam
              doloremque inventore sequi, placeat quis voluptas itaque, voluptatibus animi. Delectus
              dicta molestias unde quasi, inventore animi culpa? Necessitatibus, in sint placeat
              saepe consequatur maiores eaque quod ratione distinctio aspernatur at accusantium
              ipsum quasi recusandae voluptatibus sit cupiditate dolorem.
            </div>
            <div className="sender-info text--colors_primary">
              Andrew Okpainmo | <span>senderemail@email.com</span>
            </div>
            <div className="date text--colors_secondary">25th June 2029</div>
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
        <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="message-info text-[12px]">
            <div className="message mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit cupiditate nam
              doloremque inventore sequi, placeat quis voluptas itaque, voluptatibus animi. Delectus
              dicta molestias unde quasi, inventore animi culpa? Necessitatibus, in sint placeat
              saepe consequatur maiores eaque quod ratione distinctio aspernatur at accusantium
              ipsum quasi recusandae voluptatibus sit cupiditate dolorem.
            </div>
            <div className="sender-info text--colors_primary">
              Andrew Okpainmo | <span>senderemail@email.com</span>
            </div>
            <div className="date text--colors_secondary">25th June 2029</div>
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
        <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="message-info text-[12px]">
            <div className="message mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit cupiditate nam
              doloremque inventore sequi, placeat quis voluptas itaque, voluptatibus animi. Delectus
              dicta molestias unde quasi, inventore animi culpa? Necessitatibus, in sint placeat
              saepe consequatur maiores eaque quod ratione distinctio aspernatur at accusantium
              ipsum quasi recusandae voluptatibus sit cupiditate dolorem.
            </div>
            <div className="sender-info text--colors_primary">
              Andrew Okpainmo | <span>senderemail@email.com</span>
            </div>
            <div className="date text--colors_secondary">25th June 2029</div>
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
        <div className="message-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="message-info text-[12px]">
            <div className="message mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit cupiditate nam
              doloremque inventore sequi, placeat quis voluptas itaque, voluptatibus animi. Delectus
              dicta molestias unde quasi, inventore animi culpa? Necessitatibus, in sint placeat
              saepe consequatur maiores eaque quod ratione distinctio aspernatur at accusantium
              ipsum quasi recusandae voluptatibus sit cupiditate dolorem.
            </div>
            <div className="sender-info text--colors_primary">
              Andrew Okpainmo | <span>senderemail@email.com</span>
            </div>
            <div className="date text--colors_secondary">25th June 2029</div>
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
      </div>
    </section>
  );
}

export default UnrepliedMessages;
