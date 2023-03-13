import React from 'react';

function AllPost({ postsData }) {
  console.log(postsData);

  return (
    <section className="all-posts mt-12 text-[12px] pb-20">
      <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">All posts</h3>
      <ul className="overview-header mt-3 flex justify-between px-2 md:px-0">
        <li>Post details</li>
        <li>Reactions</li>
      </ul>

      <div className="all-posts flex flex-col gap-y-8 mt-4">
        {postsData.allPosts.map((each) => {
          const { _id: id, postTitle, postAuthor, createdBy, reactions } = each;

          return (
            <div className="post-card bg--glass2 shadow px-3 py-3 rounded" key={id}>
              <div className="flex justify-between text-[12px] w-full">
                <div className="post-info w-10/12 md:w-11/12">
                  <div className="mb-2">
                    <div className="post-title montserrat mb-1">{postTitle}</div>
                    <div className="post-author post-id text-[10px] hidden">
                      Post Id: <span>{id}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="post-author text--colors_primary">{postAuthor}</div>
                    <div className="post-admin text-[10px]">
                      Created by: <span>{createdBy}</span>
                    </div>
                  </div>
                  <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                    <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                      edit
                    </button>
                    <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                      delete
                    </button>
                  </section>
                </div>
                <div className="reaction-count w-1/12 flex justify-center items-center">
                  {reactions}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AllPost;
