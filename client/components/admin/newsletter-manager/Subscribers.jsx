import React from 'react';

function Subscribers() {
  return (
    <section className="subscribers-section pt-8">
      <div className="section-top flex justify-between items-center mt-4">
        <h3 className="montserrat text-xl font-bold text--colors_secondary">
          Subscribers/Mail-list
        </h3>
        <div className="subscriber-count montserrat text-md font-bold text--colors_secondary">
          (1000)
        </div>
      </div>
      <div className="subscribers flex flex-col gap-y-6 mt-4 text-[12px] md:w-full md:justify-between md:flex-wrap md:flex-row">
        <div className="subscriber-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="sender-info text--colors_primary mb-2">senderemail@email.com</div>
          <div className="date-added text--colors_secondary">Date added: 25th June 2029</div>
          <div className="button-wrappers flex gap-x-3 flex-row-reverse">
            <button type="button" className="hidden msg-btn btn--outline px-4 py-2 mt-4 rounded">
              send message
            </button>
            <button type="button" className="msg-btn btn--regular px-4 py-2 mt-4 rounded">
              delete
            </button>
          </div>
        </div>
        <div className="subscriber-card bg--glass2 shadow px-3 py-3 rounded md:w-[48%]">
          <div className="sender-info text--colors_primary mb-2">senderemail@email.com</div>
          <div className="date-added text--colors_secondary">Date added: 25th June 2029</div>
          <div className="button-wrappers flex gap-x-3 flex-row-reverse">
            <button type="button" className="hidden msg-btn btn--outline px-4 py-2 mt-4 rounded">
              send message
            </button>
            <button type="button" className="msg-btn btn--regular px-4 py-2 mt-4 rounded">
              delete
            </button>
          </div>
        </div>
        <div className="subscriber-card bg--glass2 shadow px-3 py-3 rounded m:dw-[48%]">
          <div className="sender-info text--colors_primary mb-2">senderemail@email.com</div>
          <div className="date-added text--colors_secondary">Date added: 25th June 2029</div>
          <div className="button-wrappers flex gap-x-3 flex-row-reverse">
            <button type="button" className="hidden msg-btn btn--outline px-4 py-2 mt-4 rounded">
              send message
            </button>
            <button type="button" className="msg-btn btn--regular px-4 py-2 mt-4 rounded">
              delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribers;
