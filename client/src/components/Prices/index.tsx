import heroImage from '../../assets/img/bg.png';

const Prices = () => {
  return (
    <section
      className='relative py-8 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
      <div className='relative container mx-auto'>
        <div className='w-full mt-8'>
          <h1 className='text-3xl lg:text-5xl font-bold text-center text-gray-100 mb-8'>
            Prices
          </h1>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/3 max-w-lg p-4'>
            <div className='flex flex-col h-full rounded-lg shadow-lg p-6 border border-gray-800 backdrop-blur-sm'>
              <div className='flex justify-center items-center mb-4'>
                <h2 className='text-2xl font-medium text-white'>
                  Man`s Services
                </h2>
              </div>
              <div className='text-gray-400 flex justify-between'>
                <p>Haircut</p> <p>25</p>
              </div>
              <div className='text-gray-400 mt-4 flex justify-between'>
                <p>Haircut + Beard</p> <p>35</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/3 max-w-lg p-4'>
            <div className='flex flex-col h-full rounded-lg shadow-lg p-6 border border-gray-800 backdrop-blur-sm'>
              <div className='flex justify-center items-center mb-4'>
                <h2 className='text-2xl font-medium text-white'>
                  Kid`s Services
                </h2>
              </div>
              <div className='text-gray-400 flex justify-between'>
                <p>Haircut (under 12)</p> <p>20</p>
              </div>
              <div className='text-gray-400 mt-4 flex justify-between'>
                <p>Haircut + Design</p> <p>30+</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/3 max-w-lg p-4'>
            <div className='rounded-lg shadow-lg p-6 border border-gray-800 backdrop-blur-sm'>
              <div className='flex justify-center items-center mb-4'>
                <h2 className='text-2xl font-medium text-white'>
                  Other Services
                </h2>
              </div>
              <div className='text-gray-400 flex justify-between'>
                <p>Eyebrows</p> <p>10</p>
              </div>
              <div className='text-gray-400 mt-4 flex justify-between'>
                <p>Beard</p> <p>15</p>
              </div>
              <div className='text-gray-400 mt-4 flex justify-between'>
                <p>Beard + Bigen</p> <p>25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
