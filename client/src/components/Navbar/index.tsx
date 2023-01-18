import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileNavbar from './mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-black relative'>
      <div className='absolute top-0 z-30 left-0 right-0 bg-black bottom-0'></div>
      <div className='relative container mx-auto flex items-center justify-between flex-wrap'>
        <div className='relative z-30 p-6 lg:p-5 mb-4 flex items-center flex-shrink-0 text-white mr-6'>
          <Link to='/'>
            <span className='relative font-kanit font-semibold text-4xl tracking-tight'>
              Next Level
              <br />
              <span
                className='absolute tracking-wide top-9 right-0 text-orange-400 text-xl
            '
              >
                Barbershop
              </span>
            </span>
          </Link>
        </div>
        <div className='block lg:hidden p-6 z-50'>
          <button
            id='hamburger'
            onClick={toggle}
            className='flex flex-col space-y-1 items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-orange-500'
          >
            <div className={`${isOpen && 'rotate-45 translate-y-2'} w-6 transition-all ease-in-out h-1 bg-orange-400 rounded-full`}></div>
            <div className={`${isOpen && 'opacity-0'} line-2 w-6 h-1 bg-orange-400 rounded-full`}></div>
            <div className={`${isOpen && '-rotate-45 -translate-y-2'} transition-all ease-in-out line-3 w-6 h-1 bg-orange-400 rounded-full`}></div>
          </button>
        </div>
        <MobileNavbar isOpen={isOpen} setShow={setIsOpen} />
        <div
          className={`z-50 w-full hidden flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className='text-sm lg:flex-grow'>
            <Link
              to='/services'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
            >
              Services
            </Link>
            <Link
              to='/about'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
            >
              About
            </Link>
            <Link
              to='/team'
              className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200'
            >
              Team
            </Link>
          </div>
          <Link to='/book-now'>
            <div className='font-bold text-2xl text-white bg-orange-500 hover:bg-orange-600 p-8'>
              Book Now
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
