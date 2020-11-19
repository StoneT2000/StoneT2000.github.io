import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.css'
const DefaultLayout = ({ children, page }) => {
  return (
    <div className="DefaultLayout">
      <Header active={page}/>
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
