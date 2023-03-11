import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

function StickyTOCWrapper({ currentPost }) {
  const { scrollHeightReached_2 } = useContext(GlobalContext);
  const { postBody } = currentPost;

  return (
    <section
      className={`table-of-contents lg:w-[300px] ${
        scrollHeightReached_2 ? 'block fixed top-28 right-28 z-50' : 'hidden'
      }`}
    >
      <h3 className="montserrat font-bold text--colors_secondary text-lg mb-3">
        Table of contents
      </h3>
      <ul className="flex-col gap-y-3 lg:flex list-none nunito-sans lg:justify-between text-[12px] text--colors_default nunito-sans">
        {postBody.map((each) => {
          const { sectionTitle, sectionSlug } = each;

          return (
            <a href={`#${sectionSlug}`} key={postBody.indexOf(each)}>
              <li
                className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
              >
                {sectionTitle}
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
}

export default StickyTOCWrapper;
