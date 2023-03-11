import React from 'react';
import Footer from './Footer';

function MainAppLayout({ children }) {
  return (
    <main className="bg--glass text--colors_default nunito-sans mt-16">
      {/* <MobileNavBar /> */}
      {/* <Navbar /> */}
      {children}
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  );
}

export default MainAppLayout;
