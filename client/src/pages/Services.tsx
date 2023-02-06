import Hero from '../components/Hero';
import ShopServices from '../components/ShopServices';

const Services = () => {
  // set page title
  document.title = 'Services';

  return (
    <div>
      <Hero
        title='Experience the Art of Grooming'
        subTitle=''
        desc="At Next Level Barbershop, we pride ourselves on our ability to provide our clients with the highest level of grooming services. From haircuts to shaves and beard trims, our skilled barbers use the latest techniques to give you the perfect look. We also offer beard enhancement, styling, and other special services to help you look and feel your best. Whether you're looking for a classic or modern look, we've got you covered. Visit us today and experience the art of grooming at its finest."
      />
      <ShopServices />
    </div>
  );
};

export default Services;
