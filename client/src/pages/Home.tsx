import Hero from '../components/Hero';
import MiddleSection from '../components/MiddleSection';
import BottomSection from '../components/BottomSection';

const Home = () => {
  // set the title of the page
  document.title = 'Home';

  return (
    <div className='flex flex-col'>
      <Hero
        title='Next Level'
        subTitle='Barbershop'
        desc="Experience the Best in Men's Grooming at Our Barbershop."
        button='Learn More'
        image
      />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Home;
