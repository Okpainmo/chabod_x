import React from 'react';

function PostPage({ currentPost }) {
  const { postTitle, postAuthor, postDate, postTags, postBody, postCategory } = currentPost;

  const tagsArray = postTags.split(',');

  // console.log(postBody);

  return (
    <div className="post-page">
      <section className="post-top pb-10 px-3 pt-24 blog_bg--primary xsm:px-[20px]">
        <div className="sm:w-[80%] sm:mx-auto">
          <div className="tags w-full flex flex-wrap gap-x-3 text--colors_white">
            {tagsArray.map((each) => {
              // console.log(`${each}_${tagsArray.indexOf(each)}`);
              return (
                <div
                  className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]"
                  key={`${each}_${tagsArray.indexOf(each)}`}
                >
                  {each.trim()}
                </div>
              );
            })}
          </div>
          <div className="pb-3">
            <h1 className="post-title text-2xl md:text-3xl poppins font-bold pt-3">{postTitle}</h1>
            <div className="mt-1 mb-4 underline text-[12px]">{postCategory}</div>
          </div>
          <div className="post-details text-[12px]">
            <div className="post-author poppins text--colors_primary font-bold">{postAuthor}</div>
            <div className="post-author font-bold">{postDate}</div>
          </div>
        </div>
      </section>
      <section className="post-body text-[14px] px-3 xsm:px-[20px] mt-8 pb-16 sm:w-[80%] sm:mx-auto lg:flex lg:justify-between">
        <div className="lg:w-[65%]">
          {postBody.map((each) => {
            const { sectionTitle, sectionSlug, sectionBody } = each;

            return (
              <section className="pt-8" key={postBody.indexOf(each)}>
                <h3
                  className="post-section-title font-bold poppins text-lg capitalize"
                  id={sectionSlug}
                >
                  {sectionTitle}
                </h3>
                <p className="post-serif mt-2 leading-[27px] md:leading-[30px]">{sectionBody}</p>
              </section>
            );
          })}
        </div>
        <div className="table-of-contents hidden lg:inline-block lg:w-[20%]">
          <h3 className="montserrat font-bold text--colors_secondary text-lg mb-3">
            Table of contents
          </h3>
          <ul className="flex-col gap-y-3 lg:flex list-none nunito-sans lg:justify-between text-[12px]">
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
        </div>
      </section>
    </div>
  );
}

export default PostPage;
