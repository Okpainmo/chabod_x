import React from 'react';
import GeneralOverview from './GeneralOverview';
// import NewMessages from './NewMessages';

function DashboardHome({ mainOverlayShow }) {
  return (
    <div className="pb-20">
      <GeneralOverview mainOverlayShow={mainOverlayShow} />
      {/* // <NewMessages /> */}
    </div>
  );
}

export default DashboardHome;
