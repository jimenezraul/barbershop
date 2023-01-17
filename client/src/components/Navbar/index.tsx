import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-black'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
        <div className='p-6 lg:p-0 flex items-center flex-shrink-0 text-white mr-6'>
          <span className='relative font-semibold text-4xl tracking-tight'>
            Next Level
            <br />  
            <span className='absolute top-8 right-0 text-orange-400 text-base
            '>Barbershop</span>
          </span>
        </div>
        <div className='block lg:hidden p-6'>
          <button
            onClick={toggle}
            className='flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${
            isOpen ? 'block' : 'hidden'
          } flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className='text-sm lg:flex-grow'>
            <Link
              to='#services'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
            >
              Services
            </Link>
            <Link
              to='#about'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
            >
              About
            </Link>
            <Link
              to='#team'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200'
            >
              Team
            </Link>
          </div>
          <Link to='#book-now'>
            <div className='font-bold text-2xl text-white bg-orange-500 hover:bg-orange-600 p-6'>
              Book Now
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
