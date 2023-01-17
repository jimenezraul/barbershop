import Hero from '../components/Hero';
import MiddleSection from '../components/MiddleSection';
import Navbar from '../components/Navbar';
import BottomSection from '../components/BottomSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </>
  );
};

export default Home;
