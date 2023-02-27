import React from 'react';
import NewsletterSection from '../../NewsletterSection';
// import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t py-16 sm:pb-24 sm:pt-16 px-3 xsm:px-8 sm:px-12 md:px-20 lg:flex lg:w-[80%] lg:mx-auto mt-20">
      {/* <section className="flex flex-col lg:flex-row lg:flex-wrap justify-between"> */}
      {/* <section className="menu-items flex justify-between gap-x-4 md:w-1/2 lg:w-1/3"> */}
      <section className="lg:w-1/2 flex justify-between">
        <div className="tutorial-links-wrapper w-8/12">
          <h3 className="font-bold mb-4 montserrat text--colors_secondary">Blog Contents</h3>
          <div className="flex">
            <div className="min-h-[150px] w-1/2">
              <ul className="flex flex-col gap-y-3 text-[12px]">
                <li>Crypto</li>
                <li>Forex</li>
                <li>Stocks</li>
                <li>Exchange</li>
              </ul>
            </div>
            <div className="min-h-[150px] w-1/2">
              <ul className="flex flex-col gap-y-3 text-[12px]">
                <li>Crypto</li>
                <li>Forex</li>
                <li>Stocks</li>
                <li>Exchange</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tutorial-links-wrapper w-4/12">
          <h3 className="font-bold mb-4 montserrat text--colors_secondary">Links</h3>
          <div className="min-h-[150px] w-full">
            <ul className="flex flex-col gap-y-3 text-[12px]">
              <li>Crypto</li>
              <li>Forex</li>
              <li>Stocks</li>
              <li>Exchange</li>
            </ul>
          </div>
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
