import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.css'
const DefaultLayout = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
