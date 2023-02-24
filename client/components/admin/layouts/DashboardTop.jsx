import React from 'react';
// import DashboardMenu from './DashboardMenu';
import Emoji from '../../Emoji';

function DashboardTop() {
  return (
    <section className="dashboard-top pb-3 pt-20 xsm:pt-28 xsm:pb-4 lg:border-b">
      <div className="mb-4 px-3 xsm:px-[20px] sm:px-16">
        <h2 className="poppins text-2xl font-bold mb-2">
          Hi Andrew <Emoji symbol="👋" label="waving-hand" />,
        </h2>
        <span className="text--colors_secondary">Welcome back</span>
      </div>
    </section>
  );
}

export default DashboardTop;
