import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.css';

/**
 * Shared page chrome with header, main content slot, and footer.
 *
 * @param {{ children: import('react').ReactNode, page: string }} props - Layout children and active nav page name.
 * @returns {JSX.Element} Layout wrapper for site pages.
 */
const DefaultLayout = ({ children, page }) => {
  return (
    <div className="DefaultLayout">
      <Header active={page} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
