import React, { useState, useContext } from 'react';
import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';

function MessageReply() {
  const { showReplyMailForm } = useContext(GlobalAdminContext);

  const [form, setForm] = useState({
    replyType: '',
    subject: '',
    message: ''
  });

  return (
    <section
      className={`reply-mail-form mt-12 text-[12px] w-full ${
        showReplyMailForm ? 'block' : 'hidden'
      }`}
    >
      <h3 className="montserrat text-xl font-bold text--colors_secondary text-center">Reply</h3>
      <div className="text-center mt-2">
        replying to <span className="underline text--colors_primary">senderemail@gmail.com</span>{' '}
      </div>
      <form
        //   onSubmit={handleSubmit}
        className="contact-form xsm:px-[30px] py-[30px]"
      >
        <div className="input-group flex flex-col">
          <label className="nunito-sans mb-2" htmlFor="replyType">
            Reply type
          </label>
          <select
            required
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                replyType: e.target.value
              });
            }}
            name="replyType"
            id="replyType"
            className="p-3 border outline-none rounded"
          >
            <option value="text">-- please select an email reply type --</option>
            <option value="text">text</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            required
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                subject: e.target.value
              });
            }}
            name="subject"
            id="subject"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            required
            cols={20}
            rows={5}
            value={form.message}
            onChange={(e) => {
              setForm({
                ...form,
                message: e.target.value
              });
            }}
            name="message"
            id="message"
            className="p-3 border outline-none rounded"
          ></textarea>
        </div>
        <button
          className="nunito-sans mt-10 btn--regular px-4 py-3 text-white w-full rounded text-[14px]"
          type="submit"
          // onClick={handleSubmit}
          onClick={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default MessageReply;
