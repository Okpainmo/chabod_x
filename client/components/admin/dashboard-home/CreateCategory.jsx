import React, { useContext } from 'react';
import { AdminHomeContext } from '../../../context/admin/AdminHomeContext';
import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';

function CreateCategory() {
  const { createCategoriesForm, setCreateCategoriesForm, createCategory } =
    useContext(AdminHomeContext);
  const { showReplyMailForm } = useContext(GlobalAdminContext);

  return (
    <div
      className={`post-sections-section text-center mt-20 ${
        showReplyMailForm ? 'hidden' : 'block'
      }`}
    >
      <h3 className="montserrat text-xl font-bold text--colors_secondary text-center">
        Create a new category
      </h3>
      <form className="post-body-form xsm:px-[30px] pt-6 pb-10 border-b text-[12px] md:text-[14px]">
        <div className="input-group flex flex-col mt-6">
          <label className="nunito-sans mb-3" htmlFor="postSectionSlug">
            Add new category name
          </label>
          <input
            type="text"
            required
            value={createCategoriesForm.categoryName}
            onChange={(e) => {
              setCreateCategoriesForm({
                ...createCategoriesForm,
                categoryName: e.target.value
              });
            }}
            name="postSectionSlug"
            id="postSectionSlug"
            className="p-3 border outline-none rounded"
          />
        </div>
        <button
          className="nunito-sans mt-10 btn--regular px-4 py-3 text-white w-full rounded text-[14px]"
          type="submit"
          onClick={createCategory}
        >
          Create category
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
