import React, { useState } from 'react';

function Contacts() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    message: ''
  });

  return (
    <section className="contacts-section text-center px-3 mb-[100px] sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[700px] text-[12px] sm:text-[14px]">
      <h1 className="section-title text-2xl sm:text-4xl poppins font-bold">Let's Connect</h1>
      <div className="contacts-details mt-20 text-center md:flex md:justify-between">
        <div className="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-phone mx-auto"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <div className="phone-numbers flex flex-col gap-2 mt-6">
            <span>+234 81 8976 4364</span>
            <span>+234 90 5373 9194</span>
          </div>
        </div>
        <div className="email mt-16 md:mt-0">
          <div className="emails flex flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-envelope mx-auto"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <div className="phone-numbers flex flex-col gap-2">
              <a className="text--colors_primary underline" href="okpainmoandrew@gmail.com">
                okpainmoandrew@gmail.com
              </a>
              <a className="hidden" href="mawiyoandrews@gmail.com">
                mawiyoandrews@gmail.com
              </a>
            </div>
          </div>
          <div className="socials flex w-[100px] gap-6 mt-4 mx-auto justify-center">
            <a
              className="twitter bg--secondary w-[30px] h-[30px] rounded-full p-[0.5rem]"
              href="gh.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="linked-in bg--secondary w-[30px] h-[30px] rounded-full p-[0.55rem]"
              href="gh.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="form-wrapper mt-20 md:mt-32">
        <h3 className="poppins text-2xl font-bold">Drop A Message</h3>
        <form
          //   onSubmit={handleSubmit}
          className="contact-form xsm:px-[30px] py-[30px]"
        >
          <div className="input-group flex flex-col">
            <label className="nunito-sans mb-2" htmlFor="name">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  name: e.target.value
                });
              }}
              name="name"
              id="name"
              className="outline-none p-3 border rounded"
            />
          </div>
          <div className="input-group flex flex-col mt-6">
            <label className="nunito-sans mb-2" htmlFor="email">
              Email address
            </label>
            <input
              required
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value
                });
              }}
              name="email"
              id="email"
              className="p-3 border outline-none rounded"
            />
            <span className="mt-2 hidden">your email is safe with me 👍.</span>
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
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
