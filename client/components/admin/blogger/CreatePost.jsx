import React, { useState } from 'react';

function CreatePost() {
  const [hidePostIntroForm, setHidePostIntroForm] = useState(false);

  const handleHidePostIntroForm = () => {
    setHidePostIntroForm(true);
  };

  const adminName = 'to be programmatically obtained';

  const [postIntroForm, setPostIntroForm] = useState({
    // email: '',
    postTags: '',
    postTitle: '',
    postAuthor: '',
    postDate: '',
    postCategory: '',
    // to be added programmatically. the value will be "admin + NAME OF CURRENTLY LOGGED IN ADMIN"
    createdBy: adminName
  });

  const [postBodyForm, setPostBodyForm] = useState({
    // email: '',
    sectionTitle: '',
    sectionBody: ''
  });

  return (
    <section className="blogger pb-20 w-full">
      <h3 className="montserrat text-xl font-bold text--colors_secondary mt-6 text-center">
        Make a post
      </h3>
      <form
        //   onSubmit={handleSubmit}
        className={`post-title-form xsm:px-[30px] py-10 border-b text-[12px] ${
          hidePostIntroForm ? 'hidden' : 'block'
        }`}
      >
        <div className="input-group post-tags flex flex-col mb-6">
          <label className="nunito-sans mb-2" htmlFor="postTags">
            Add post tags{' '}
            <span className="underline text--colors_primary">
              (please seperate each tag with a comma)
            </span>
          </label>
          <input
            required
            placeholder="post tags - in lower case"
            type="text"
            value={postIntroForm.postTags}
            onChange={(e) => {
              setPostIntroForm({
                ...postIntroForm,
                postTags: e.target.value
              });
            }}
            name="postTags"
            id="postTags"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group post-title flex flex-col mb-6">
          <label className="nunito-sans mb-2" htmlFor="postTitle">
            Add post title
          </label>
          <input
            required
            type="text"
            placeholder="post title"
            value={postIntroForm.postTitle}
            onChange={(e) => {
              setPostIntroForm({
                ...postIntroForm,
                postTitle: e.target.value
              });
            }}
            name="postTitle"
            id="postTitle"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group post-author flex flex-col mb-6">
          <label className="nunito-sans mb-2" htmlFor="postAuthor">
            Add post author
          </label>
          <input
            required
            placeholder="post author"
            type="text"
            value={postIntroForm.postAuthor}
            onChange={(e) => {
              setPostIntroForm({
                ...postIntroForm,
                postAuthor: e.target.value
              });
            }}
            name="postAuthor"
            id="postAuthor"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group post-date flex flex-col mb-6">
          <label className="nunito-sans mb-2" htmlFor="postDate">
            Add post date
          </label>
          {/* input type set to text, to ensure format is as we wish to have on blog */}
          <input
            required
            type="text"
            placeholder="post date"
            value={postIntroForm.postDate}
            onChange={(e) => {
              setPostIntroForm({
                ...postIntroForm,
                postDate: e.target.value
              });
            }}
            name="postDate"
            id="postDate"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group post-category flex flex-col mb-6">
          <label className="nunito-sans mb-2" htmlFor="postCategory">
            Add post category
          </label>
          <select
            required
            type="text"
            value={postIntroForm.postCategory}
            onChange={(e) => {
              setPostIntroForm({
                ...postIntroForm,
                postCategory: e.target.value
              });
            }}
            name="postCategory"
            id="postCategory"
            className="p-3 border outline-none rounded"
          >
            <option value="Front-end web development">-- please select a post category --</option>
            <option value="Front-end web development">Front-end web development</option>
            <option value="back-end web development">Back-end web development</option>
            <option value="Blockchain/web3">Blockchain/web3</option>
          </select>
        </div>

        <button
          className="nunito-sans mt-4 btn--regular px-4 py-3 text-white w-full rounded text-[14px]"
          type="submit"
          // onClick={handleSubmit}
          onClick={(e) => {
            e.preventDefault();
            handleHidePostIntroForm();
            console.log(postIntroForm);
          }}
        >
          Add post into details
        </button>
      </form>
      <form
        //   onSubmit={handleSubmit}
        className={`post-body-form xsm:px-[30px] py-10 border-b text-[12px] md:text-[14px] ${
          !hidePostIntroForm ? 'hidden' : 'block'
        }`}
      >
        <div className="input-group flex flex-col">
          <label className="nunito-sans mb-2" htmlFor="postSectionTitle">
            Add section title
          </label>
          <input
            type="text"
            required
            value={postBodyForm.sectionTitle}
            onChange={(e) => {
              setPostBodyForm({
                ...postBodyForm,
                sectionTitle: e.target.value
              });
            }}
            name="postSectionTitle"
            id="postSectionTitle"
            className="p-3 border outline-none rounded"
          />
        </div>
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-2" htmlFor="postSectionBody">
            Add section body
          </label>
          <textarea
            required
            cols={20}
            rows={5}
            value={postBodyForm.sectionBody}
            onChange={(e) => {
              setPostBodyForm({
                ...postBodyForm,
                sectionBody: e.target.value
              });
            }}
            name="postSectionBody"
            id="postSectionBody"
            className="p-3 border outline-none rounded"
          ></textarea>
        </div>
        <button
          className="nunito-sans mt-10 btn--regular px-4 py-3 text-white w-full rounded text-[14px]"
          type="submit"
          // onClick={handleSubmit}
          onClick={(e) => {
            e.preventDefault();
            console.log(postBodyForm);
          }}
        >
          Add post section
        </button>
      </form>
    </section>
  );
}

export default CreatePost;
