import React, { useContext } from 'react';
import { BloggerContext } from '../../../context/admin/BloggerContext';

function CreatePost({ categoriesData }) {
  // console.log(categoriesData.allCategories);
  const {
    postIntroForm,
    postSectionsForm,
    hidePostIntroForm,
    setPostIntroForm,
    setPostSectionsForm,
    handleHidePostIntroForm,
    handleShowPostIntroForm,
    createPostIntro,
    addPostSection,
    finishPost
  } = useContext(BloggerContext);

  return (
    <section className="blogger pb-20 w-full">
      <div className="section-top mt-12 xsm:px-[30px] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className={`cursor-pointer bi bi-arrow-left absolute sm:left-[30px] top-[5px] ${
            hidePostIntroForm ? 'block' : 'hidden'
          }`}
          viewBox="0 0 16 16"
          onClick={handleShowPostIntroForm}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <h3 className="montserrat text-xl font-bold text--colors_secondary text-center">
          Make a post
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className={`cursor-pointer bi bi-arrow-right absolute right-0 sm:right-[30px] top-[5px] ${
            hidePostIntroForm ? 'hidden' : 'block'
          }`}
          viewBox="0 0 16 16"
          onClick={handleHidePostIntroForm}
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
      <div className={`post-intro-section ${hidePostIntroForm ? 'hidden' : 'block'}`}>
        <h3 className="text--colors_primary mt-3 text-center text-[14px] montserrat">
          Add all post intro details
        </h3>
        <form
          //   onSubmit={handleSubmit}
          className="post-title-form xsm:px-[30px] py-10 border-b text-[12px]"
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
          <div className="input-group post-slug flex flex-col mb-6">
            <label className="nunito-sans mb-2" htmlFor="postSlug">
              Add post slug
            </label>
            {/* input type set to text, to ensure format is as we wish to have on blog */}
            <input
              required
              type="text"
              placeholder="post slug"
              value={postIntroForm.postSlug}
              onChange={(e) => {
                setPostIntroForm({
                  ...postIntroForm,
                  postSlug: e.target.value
                });
              }}
              name="postSlug"
              id="postSlug"
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
              <option value="category not selected">-- please select a post category --</option>
              {categoriesData.allCategories.map((each) => {
                const { _id: id, categoryName } = each;
                return (
                  <option value={categoryName} key={id}>
                    {categoryName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-group post-brief flex flex-col mb-6">
            <label className="nunito-sans mb-2" htmlFor="postBrief">
              Add post brief
            </label>
            <textarea
              required
              type="text"
              cols={20}
              rows={5}
              maxLength="150"
              value={postIntroForm.postBrief}
              onChange={(e) => {
                setPostIntroForm({
                  ...postIntroForm,
                  postBrief: e.target.value
                });
              }}
              name="postBrief"
              id="postBrief"
              className="p-3 border outline-none rounded"
            ></textarea>
          </div>
          <button
            className="nunito-sans mt-4 btn--regular px-4 py-3 text-white w-full rounded text-[14px]"
            type="submit"
            // onClick={handleSubmit}
            onClick={createPostIntro}
          >
            Add post intro details
          </button>
        </form>
      </div>
      <div
        className={`post-sections-section text-center ${!hidePostIntroForm ? 'hidden' : 'block'}`}
      >
        <h3 className="text--colors_primary mt-3 text-center text-[14px] montserrat">
          Add post sections - one at a time
        </h3>
        <form className="post-body-form xsm:px-[30px] py-10 border-b text-[12px] md:text-[14px]">
          <div className="input-group flex flex-col">
            <label className="nunito-sans mb-2" htmlFor="postSectionTitle">
              Add section title
            </label>
            <input
              type="text"
              required
              value={postSectionsForm.sectionTitle}
              onChange={(e) => {
                setPostSectionsForm({
                  ...postSectionsForm,
                  sectionTitle: e.target.value
                });
              }}
              name="postSectionTitle"
              id="postSectionTitle"
              className="p-3 border outline-none rounded"
            />
          </div>
          <div className="input-group flex flex-col mt-6">
            <label className="nunito-sans mb-2" htmlFor="postSectionSlug">
              Add section slug
            </label>
            <input
              type="text"
              required
              value={postSectionsForm.sectionSlug}
              onChange={(e) => {
                setPostSectionsForm({
                  ...postSectionsForm,
                  sectionSlug: e.target.value
                });
              }}
              name="postSectionSlug"
              id="postSectionSlug"
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
              value={postSectionsForm.sectionBody}
              onChange={(e) => {
                setPostSectionsForm({
                  ...postSectionsForm,
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
            onClick={addPostSection}
          >
            Add section
          </button>
        </form>
        <button
          type="button"
          className="finish-post-btn text-center btn--outline mt-16 py-3 text-[12px] rounded w-full sm:w-[400px]"
          onClick={finishPost}
        >
          Finish post
        </button>
      </div>
    </section>
  );
}

export default CreatePost;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dicta libero aut ea delectus sequi quidem et temporibus. Doloremque?
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aperiam, provident harum accusantium maxime praesentium. Nostrum tempora dolorem magni rerum deleniti eos. Nulla fugit vero quas hic ut tempora ratione!
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dicta libero aut ea delectus sequi quidem et temporibus. Doloremque?
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aperiam, provident harum accusantium maxime praesentium. Nostrum tempora dolorem magni rerum deleniti eos. Nulla fugit vero quas hic ut tempora ratione!
