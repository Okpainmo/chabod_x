import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/portfolio/PortfolioContext';
import Preloader from '../Preloader';

function PortfolioPreloader() {
  const { showMessageResponsePreloader, showNewsletterResponsePreloader } =
    useContext(PortfolioContext);

  if (showMessageResponsePreloader) {
    return <Preloader>sending message...</Preloader>;
  }

  if (showNewsletterResponsePreloader) {
    return <Preloader>sending request...</Preloader>;
  }
}

export default PortfolioPreloader;
