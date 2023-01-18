import { Link } from 'react-router-dom';
import heroImage from '../../assets/img/bg.png';
import heroMan from '../../assets/img/hero-man-pic.png';

const Hero = ({ title, span, desc, button }: HeroProps) => {
  return (
    <section
      className='bg-cover z-0 bg-center flex  lg:h-[40vh] relative'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
      <div className='relative w-full h-full items-center flex flex-wrap justify-center'>
        <div className='text-center w-full lg:w-1/2 max-w-xl py-10'>
          <h1 className='text-5xl lg:text-7xl text-white font-bold font-kanit tracking-wide'>
            {title}{' '}
            <br />
            <span className='text-orange-400 mt-6 tracking-widest'>{span}</span>
          </h1>
          <p className='text-xl text-white mt-4'>{desc}</p>
          {button && (
            <Link to='/services'>
              <button className='transtition border hover:bg-white hover:text-orange-400 text-2xl font-bold text-white px-6 py-2 rounded-lg mt-6'>
                {button}
              </button>
            </Link>
          )}
        </div>
        <div className='w-full lg:w-1/2 max-w-xl flex justify-end'>
          <img className='h-full lg:rounded-full' src={heroMan} alt='' />
        </div>
      </div>
      <div className='hidden md:block h-[150] overflow-hidden absolute left-0 bottom-0 right-0'>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          className='w-full h-full'
        >
          <path
            d='M-15.15,152.47 C241.53,97.22 359.47,186.03 502.25,125.83 L500.00,150.00 L0.00,150.00 Z'
            className='fill-gray-200 stroke-none'
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
