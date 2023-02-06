import heroImage from '../../assets/img/bg.png';
import haircut from '../../assets/img/mens-haircut.png';
import kid from '../../assets/img/kid.png';
import eyebrows from '../../assets/img/eyebrows.png';
import Prices from '../Prices';
import services from './services.json';

const ShopServices = () => {
  services[0].image = haircut;
  services[1].image = kid;
  services[2].image = eyebrows;

  return (
    <section className='bg-gray-200 pt-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <h1 className='text-3xl lg:text-5xl font-bold text-center text-gray-700 mb-8'>
              Our Services
            </h1>
          </div>
          <div className='flex flex-wrap lg:mb-16'>
            {services.map((service, index) => (
              <div key={index} className='w-full lg:w-1/3 p-4 flex'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <img
                    src={service.image}
                    style={{ backgroundImage: `url(${heroImage})` }}
                    alt='Haircut'
                    className='w-full rounded-lg shadow-lg'
                  />
                  <div className='flex items-center my-4 justify-center'>
                    <h2 className='text-2xl font-medium text-gray-700'>
                      {service.title}
                    </h2>
                  </div>
                  {service.descriptions.map((description, index) => (
                    <p key={index} className='text-gray-700 mb-4'>
                      <span className='font-semibold text-xl'>
                        {description.title}:
                      </span>{' '}
                      {description.description}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Prices />
    </section>
  );
};

export default ShopServices;
