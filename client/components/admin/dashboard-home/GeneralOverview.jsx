import React, { useContext } from 'react';
import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';
// import { AdminHomeContext } from '../../../context/admin/AdminHomeContext';
import UnrepliedMessages from './UnrepliedMessages';

function GeneralOverview({ categoriesData, messagesData, postsData }) {
  const { mainOverlayShow, replyMailFormHide } = useContext(GlobalAdminContext);

  // console.log(postsData.allPosts);

  return (
    <>
      <section className="categories-overview mb-8 md:w-full md:justify-between md:flex-wrap md:flex-row mt-12">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">Blog overview</h3>
        <section className="overview-header mt-3">
          <ul className="flex justify-between text-[12px] px-2 md:px-0">
            <li>Category</li>
            <li>Post count</li>
          </ul>
          <div className="overview-content flex flex-col gap-y-4 mt-4">
            {categoriesData.allCategories.map((each) => {
              const { _id: id, categoryName } = each;

              return (
                <div className="overview-card bg--glass2 shadow px-3 py-3 rounded" key={id}>
                  <ul className="flex justify-between text-[12px]">
                    <li className="font-bold montserrat w-10/12 md:w-11/12 flex gap-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                      <span>{categoryName}</span>
                    </li>
                    <li className="w-2/12 md:w-1/12 text-center">xx</li>
                  </ul>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="btn--regular w-full py-3 mt-8 rounded text-[12px]"
            onClick={() => {
              mainOverlayShow();
              replyMailFormHide();
            }}
          >
            add new category
          </button>
        </section>
      </section>
      <UnrepliedMessages messagesData={messagesData} />
      <section className="most-loved-posts mt-8 md:w-full md:justify-between md:flex-wrap md:flex-row">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">
          Most loved posts
        </h3>
        <ul className="overview-header mt-3 flex justify-between text-[12px] px-2 md:px-0">
          <li>Post details</li>
          <li>Reactions</li>
        </ul>
        <div className="most-loved-posts flex flex-col gap-y-4 mt-4">
          {postsData.allPosts.map((each) => {
            const { _id: id, postTitle, postAuthor, createdBy } = each;

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
                  <div className="reaction-count w-1/12 flex justify-center items-center">xx</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default GeneralOverview;
