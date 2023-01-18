import Hero from '../components/Hero';
import MiddleSection from '../components/MiddleSection';
import BottomSection from '../components/BottomSection';

const Home = () => {
  return (
    <>
      <Hero title="Next Level" span="Barbershop" desc="Experience the Best in Men's Grooming at Our Barbershop." button='Learn More' />
      <MiddleSection />
      <BottomSection />
    </>
  );
};

export default Home;
