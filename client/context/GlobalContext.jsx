import React, { useState, useEffect, createContext } from 'react';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  // const [scrollHeightReached_1, setScrollHeightReached_1] = useState(false);
  const [scrollHeightReached_2, setScrollHeightReached_2] = useState(false);

  function handleScroll() {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const scrollHeight = window.scrollY;

      // if (scrollHeight > 700) {
      //   setScrollHeightReached_1(true);
      // } else {
      //   setScrollHeightReached_1(false);
      // }

      if (scrollHeight > 700) {
        setScrollHeightReached_2(true);
      } else {
        setScrollHeightReached_2(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleTest = () => {
    alert('context is active');
  };

  return (
    <GlobalContext.Provider value={{ handleTest, scrollHeightReached_2 }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
