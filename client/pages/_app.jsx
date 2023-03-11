import '../styles/globals.css';
import PortfolioContextProvider from '../context/portfolio/PortfolioContext';
import AccountsContextProvider from '../context/admin/AccountsContext';
import BloggerContextProvider from '../context/admin/BloggerContext';
import GlobalContextProvider from '../context/GlobalContext';
import GlobalAdminContextProvider from '../context/admin/GlobalAdminContext';
import AdminHomeContextProvider from '../context/admin/AdminHomeContext';

export default function App({ Component, pageProps }) {
  return (
    <AdminHomeContextProvider>
      <GlobalAdminContextProvider>
        <GlobalContextProvider>
          <BloggerContextProvider>
            <PortfolioContextProvider>
              <AccountsContextProvider>
                <Component {...pageProps} />
              </AccountsContextProvider>
            </PortfolioContextProvider>
          </BloggerContextProvider>
        </GlobalContextProvider>
      </GlobalAdminContextProvider>
    </AdminHomeContextProvider>
    // <main >
    // </main>
  );
}
