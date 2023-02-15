import React from 'react';
import NewsletterSection from '../NewsletterSection';
// import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t pt-16 pb-24 sm:py-16 px-3 xsm:px-8 sm:px-12 md:px-20 lg:flex lg:w-[80%] lg:mx-auto">
      {/* <section className="flex flex-col lg:flex-row lg:flex-wrap justify-between"> */}
      {/* <section className="menu-items flex justify-between gap-x-4 md:w-1/2 lg:w-1/3"> */}
      <section className="flex gap-6 lg:w-1/2">
        <div className="min-h-[180px] w-1/3">
          <ul className="flex flex-col gap-y-3 text-[12px]">
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
            <li>Exchange</li>
          </ul>
        </div>
        <div className="min-h-[180px] w-1/3">
          <ul className="flex flex-col gap-y-3 text-[12px]">
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
            <li>Exchange</li>
          </ul>
        </div>
      </section>
      <NewsletterSection />
      {/* <section className="flex flex-col gap-6">
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Help</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>FAQs</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Help</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>FAQs</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
          </section> */}
      {/* <section className="flex flex-col gap-6">
            <div className="min-h-[180px]">
              <h4 className="text--dark font-bold text-base">Transparency</h4>
              <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </section> */}
      {/* </section> */}
      {/* </section> */}
    </footer>
  );
}

export default Footer;
