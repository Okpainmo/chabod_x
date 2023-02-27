import React from 'react';
import Subscribers from './Subscribers';
// import FloatingNewsLetterButton from '../layouts/FloatingNewsLetterButton';

function NewsLetterManager({ newsletterData }) {
  return (
    <section className="newsletter-manager pb-20">
      <Subscribers newsletterData={newsletterData} />
    </section>
  );
}

export default NewsLetterManager;
