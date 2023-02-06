import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <div className='bg-black flex flex-col h-screen'>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
