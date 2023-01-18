import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import useAutoHide from '../../hooks/useAutoHide';

const MobileNavbar = ({ isOpen, setShow }: NavProps) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleClick = (e: string) => {
    setShow(false);
    navigate(e);
  };

  useAutoHide({ ref, setIsOpen: setShow });

  return (
      <div
        ref={ref}
      className={`w-full ${
        isOpen ? 'translate-y-20 opacity-100' : '-translate-y-80 opacity-0'
      } lg:hidden absolute z-10 rounded-b-xl overflow-hidden transition transform duration-300 ease-in-out bg-black flex flex-col left-0 right-0 top-5 `}
    >
      <div className='text-sm lg:flex-grow'>
        <button
          onClick={() => handleClick('/services')}
          className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
        >
          Services
        </button>
        <button
          onClick={() => handleClick('/about')}
          className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200 mr-4'
        >
          About
        </button>
        <button
          onClick={() => handleClick('/team')}
          className='px-6 lg:p-0 text-xl block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-orange-200'
        >
          Team
        </button>
      </div>
      <button onClick={() => handleClick('/book')} className='mt-5'>
        <div className='font-bold text-2xl text-white bg-orange-500 hover:bg-orange-600 p-8'>
          Book Now
        </div>
      </button>
    </div>
  );
};

export default MobileNavbar;
