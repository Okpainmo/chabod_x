import React from 'react';

function NewsletterSection() {
  return (
    <div className="newsletter-section my-8 lg:mt-0 lg:w-1/2">
      <h2 className="text--colors_secondary text-base font-bold">Join My NewsLetter</h2>
      <span className="text--colors_secondary text-[12px]">
        Join our newsletter, and get a weekly update of our awesome new products and bonus offers
      </span>
      <form action="#" className="newsletter-form mt-4 flex">
        <input className="custom--input px-4 py-2 w-[75%] border-b outline-none" type="text" />
        <button
          type="submit"
          className="btn--regular px-4 py-2 text-[12px] font-bold montserrat w-[25%]"
        >
          Join in
        </button>
      </form>
    </div>
  );
}

export default NewsletterSection;
