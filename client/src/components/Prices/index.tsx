import heroImage from '../../assets/img/bg.png';
import prices from './prices.json';

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
          {prices.map((price, index) => (
            <div key={index} className='w-full lg:w-1/3 max-w-lg p-4'>
              <div className='relative flex flex-col space-y-3 h-full rounded-lg shadow-lg p-6 backdrop-blur overflow-hidden'>
                <div className='absolute bg-white top-0 bottom-0 left-0 right-0 opacity-5'></div>
                <div className='flex justify-center items-center mb-4'>
                  <h2 className='text-2xl font-medium text-white'>
                    {price.title}
                  </h2>
                </div>
                {price.services.map((service, index) => (
                  <div
                    key={index}
                    className='text-gray-400 flex justify-between'
                  >
                    <p>{service.title}</p> <p>{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
