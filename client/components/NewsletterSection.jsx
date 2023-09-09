import React, { useContext } from 'react';
import { PortfolioContext } from '../context/portfolio/PortfolioContext';

function NewsletterSection() {
  const { newsletterForm, setNewsletterForm, handleNewsletterSubmit } =
    useContext(PortfolioContext);

  return (
    <div className="newsletter-section mt-8 mb-12 lg:mt-0 lg:w-1/2">
      <h2 className="text--colors_secondary text-base font-bold montserrat mb-4">
        Join My NewsLetter
      </h2>
      <span className="text--colors_secondary text-[12px] sm:text-[14px]">
        Join my newsletter, and get a bi-montly update(beginning from October 2023) of awesome
        software development trends, news, tutorials, and more - to help you grow your career in
        full-stack web development, technical writing, and blockchain development.
      </span>
      <form className="newsletter-form mt-6">
        <div className="form-group flex">
          <input
            required
            className="custom--input px-4 py-2 w-[75%] border-b outline-none"
            name="email"
            // type="text"
            value={newsletterForm.email}
            onChange={(e) => {
              setNewsletterForm({
                // ...newsletterForm,
                email: e.target.value
              });
            }}
          />
          <button
            type="submit"
            className="btn--regular px-4 py-2 text-[12px] font-bold montserrat w-[25%]"
            onClick={handleNewsletterSubmit}
          >
            Join in
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSection;
