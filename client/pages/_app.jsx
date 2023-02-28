import '../styles/globals.css';
import PortfolioContextProvider from '../context/PortfolioContext';

export default function App({ Component, pageProps }) {
  return (
    <PortfolioContextProvider>
      <Component {...pageProps} />
    </PortfolioContextProvider>
    // <main >
    // </main>
  );
}
