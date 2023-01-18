import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className='bg-black flex flex-col flex-grow'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          < Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
