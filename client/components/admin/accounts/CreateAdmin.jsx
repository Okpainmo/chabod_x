import React, { useState } from 'react';

function CreateAccount() {
  const [form, setForm] = useState({
    adminName: '',
    adminBio: '',
    adminNiches: ''
  });

  return (
    <section className="create-newsletter mt-12 text-[12px] w-full">
      <h3 className="montserrat text-xl font-bold text--colors_secondary text-center">Reply</h3>
      <div className="text-center mt-2 montserrat font-bold text--colors_primary">
        Create a new admin
      </div>
      <form
        //   onSubmit={handleSubmit}
        className="contact-form xsm:px-[30px] py-[30px]"
      >
        <div className="input-group flex flex-col">
          <label className="nunito-sans mb-2" htmlFor="adminName">
            Admin name
          </label>
          <input
            type="text"
            required
            value={form.adminName}
            onChange={(e) => {
              setForm({
                ...form,
                adminName: e.target.value
              });
            }}
            name="adminName"
            id="adminName"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="adminBio">
            Admin bio
          </label>
          <input
            required
            type="text"
            value={form.adminBio}
            onChange={(e) => {
              setForm({
                ...form,
                adminBio: e.target.value
              });
            }}
            name="adminBio"
            id="adminBio"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="adminNiches">
            Admin Niches{' '}
            <span className="text--colors_primary underline">
              (seperate niches with commas if multiple)
            </span>
          </label>
          <input
            type="text"
            required
            value={form.adminNiches}
            onChange={(e) => {
              setForm({
                ...form,
                adminNiches: e.target.value
              });
            }}
            name="adminNiches"
            id="adminNiches"
            className="p-3 border outline-none rounded"
          ></input>
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="adminPassword">
            Admin password
          </label>
          <input
            type="password"
            required
            value={form.adminPassword}
            onChange={(e) => {
              setForm({
                ...form,
                adminPassword: e.target.value
              });
            }}
            name="adminPassword"
            id="adminPassword"
            className="p-3 border outline-none rounded"
          ></input>
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
          Create admin
        </button>
      </form>
    </section>
  );
}

export default CreateAccount;
