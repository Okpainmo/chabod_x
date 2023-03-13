import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

function StickyCategoriesWrapper({ categoriesData }) {
  const { scrollHeightReached_2 } = useContext(GlobalContext);

  return (
    <section
      className={`categories-wrapper mt-8 text-[12px] sm:text-[14px] border-t-2 py-8 lg:border-t-0 lg:w-[400px] font-bold montserrat ${
        scrollHeightReached_2 ? 'block fixed top-20 right-28 z-50' : 'hidden'
      }`}
    >
      <h3 className="uppercase font-bold text--colors_secondary mb-2 text-lg">All categories</h3>
      <div className="categories w-full flex flex-wrap gap-x-3 md:w-[90%]">
        {categoriesData.allCategories.map((each) => {
          const { _id: id, categoryName } = each;
          return (
            <div
              className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded"
              key={id}
            >
              {categoryName}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StickyCategoriesWrapper;
