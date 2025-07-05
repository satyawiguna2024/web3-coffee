import { Routes, Route } from 'react-router';
import {Home, BuyCoffee} from './pages/index';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';

export default function App() {
  return(
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buy-coffee' element={<BuyCoffee />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}