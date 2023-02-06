import Hero from '../components/Hero';
import Location from '../components/Location';

const About = () => {
  return (
    <div className='flex flex-col'>
      <Hero
        title='About Us'
        subTitle=''
        desc='Welcome to our family-owned barbershop, where we are dedicated to delivering top-notch grooming services exclusively for men. As a family-run business, we understand the importance of creating a welcoming and comfortable atmosphere where our clients can relax and receive the best grooming experience possible. Our team of skilled barbers is dedicated to providing the highest level of service and attention to detail, ensuring each client leaves feeling refreshed and confident. From haircuts to shaves and everything in between, we are here to meet all of your grooming needs. Come visit us and experience the difference a family-owned barbershop can make.'
      />
      <Location />
    </div>
  );
};

export default About;
