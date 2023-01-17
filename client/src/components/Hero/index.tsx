import heroImage from '../../assets/img/bg.png';
import heroMan from '../../assets/img/hero-man-pic.png';

const Hero = () => {
  return (
    <div>
      <section
        className='bg-cover bg-center h-screen lg:h-[40vh] relative overflow-hidden'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full items-center flex flex-wrap justify-center'>
          <div className='text-center w-full lg:w-1/2 max-w-xl py-10'>
            <h1 className='text-4xl lg:text-7xl text-white font-bold'>
              Next Level<span className='text-4xl bg-orange-400 rounded-xl border-2 ml-2 px-2'>Cutz</span> <br />
              <span className='text-orange-400 mt-6'>BarberShop</span>
            </h1>
            <p className='text-xl text-white mt-4'>
              Experience the Best in Men's Grooming at Our Barbershop.
            </p>
            {/* <p className='text-xl text-white mt-4'>
            From traditional cuts to modern styles, our skilled barbers are here to help you look your best.
            </p> */}
            <button className='transtition border hover:bg-white hover:text-orange-400 text-2xl font-bold text-white px-6 py-2 rounded-lg mt-6'>
              Learn more
            </button>
          </div>
          <div className='w-full lg:w-1/2 max-w-xl flex justify-end'>
            <img className='h-full md:rounded-full' src={heroMan} alt='' />
          </div>
        </div>
        <div className='hidden md:block h-[150] overflow-hidden absolute left-0 bottom-0 right-0'><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='w-full h-full'><path d="M-10.15,152.47 C241.53,97.22 359.47,186.03 502.25,125.83 L500.00,150.00 L0.00,150.00 Z" className='fill-gray-200 stroke-none'></path></svg></div>
      </section>
    </div>
  );
};

export default Hero;
