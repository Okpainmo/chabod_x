import React from 'react';
import GeneralOverview from './GeneralOverview';
// import NewMessages from './NewMessages';

function DashboardHome({ categoriesData, messagesData, postsData }) {
  return (
    <div className="pb-20">
      <GeneralOverview
        categoriesData={categoriesData}
        messagesData={messagesData}
        postsData={postsData}
      />
      {/* // <NewMessages /> */}
    </div>
  );
}

export default DashboardHome;
