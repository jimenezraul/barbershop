import Hero from '../components/Hero';
import MiddleSection from '../components/MiddleSection';
import BottomSection from '../components/BottomSection';

const Home = () => {
  // set the title of the page
  document.title = 'Home';

  return (
    <div>
      <Hero
        title='Next Level'
        span='Barbershop'
        desc="Experience the Best in Men's Grooming at Our Barbershop."
        button='Learn More'
      />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Home;
