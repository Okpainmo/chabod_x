import '../styles/globals.css';
import PortfolioContextProvider from '../context/PortfolioContext';
import AccountsContextProvider from '../context/admin/AccountsContext';
import BloggerContextProvider from '../context/admin/BloggerContext';

export default function App({ Component, pageProps }) {
  return (
    <BloggerContextProvider>
      <PortfolioContextProvider>
        <AccountsContextProvider>
          <Component {...pageProps} />
        </AccountsContextProvider>
      </PortfolioContextProvider>
    </BloggerContextProvider>
    // <main >
    // </main>
  );
}
