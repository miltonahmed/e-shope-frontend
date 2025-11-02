import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const RootLayouts = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header>
        <Header />
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayouts;
