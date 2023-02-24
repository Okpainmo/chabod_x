import React from 'react';

function MainAdminLayout() {
  return (
    <main className="pt-16 px-3">
      <h1 className="poppins text-xl font-bold border-b pb-5">Dashboard</h1>
      <section className="dashboard-menu_mobile py-3 border-b">
        <ul className="flex justify-between text-[12px]">
          <li>Admin</li>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Messages</li>
        </ul>
      </section>
    </main>
  );
}

export default MainAdminLayout;
