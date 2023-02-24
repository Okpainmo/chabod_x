import React, { useState } from 'react';

function CreateNewsletter() {
  const [form, setForm] = useState({
    newsletterType: '',
    subject: '',
    message: ''
  });

  return (
    <section className="create-newsletter mt-12 text-[12px] w-full">
      <h3 className="montserrat text-xl font-bold text--colors_secondary text-center">
        Send newsletter
      </h3>
      <form
        //   onSubmit={handleSubmit}
        className="contact-form xsm:px-[30px] py-[30px]"
      >
        <div className="input-group flex flex-col">
          <label className="nunito-sans mb-2" htmlFor="newsletterType">
            Newsletter type
          </label>
          <select
            required
            value={form.newsletterType}
            onChange={(e) => {
              setForm({
                ...form,
                newsletterType: e.target.value
              });
            }}
            name="newsletterType"
            id="newsletterType"
            className="p-3 border outline-none rounded"
          >
            <option value="text">-- please select a newsletter type --</option>
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
            value={form.subject}
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
          Send Newsletter
        </button>
      </form>
    </section>
  );
}

export default CreateNewsletter;
