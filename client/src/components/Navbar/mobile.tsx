import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import useAutoHide from 'auto-hide-hook';

const MobileNavbar = ({ isOpen, setShow }: NavProps) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleClick = (e: string) => {
    setShow(false);
    navigate(e);
  };

  useAutoHide(ref, setShow);

  return (
    <div
      ref={ref}
      className={`w-full ${
        isOpen ? 'translate-y-20 opacity-100' : '-translate-y-[100%]'
      } lg:hidden absolute z-10 overflow-hidden shadow-lg transition transform duration-300 ease-in-out bg-black flex flex-col left-0 right-0 top-5 `}
    >
      <div className='text-sm flex flex-col'>
        <button
          onClick={() => handleClick('/services')}
          className='px-6 text-center text-xl block mt-4 text-orange-400 hover:text-orange-200'
        >
          Services
        </button>
        <button
          onClick={() => handleClick('/about')}
          className='px-6 text-xl block mt-4 text-orange-400 hover:text-orange-200'
        >
          About
        </button>
        <button
          onClick={() => handleClick('/team')}
          className='px-6 text-xl mt-4 text-orange-400 hover:text-orange-200'
        >
          Team
        </button>
      </div>
      <button onClick={() => handleClick('/book')} className='mt-5 font-bold text-2xl text-white bg-orange-500 hover:bg-orange-600 p-4'>
          Book Now
      </button>
      <button onClick={() => handleClick('login')} className='font-bold text-xl text-white  hover:text-orange-500 p-8'>
          Login
      </button>
    </div>
  );
};

export default MobileNavbar;
