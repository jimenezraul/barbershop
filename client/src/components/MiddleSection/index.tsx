import haircut from '../../assets/img/haircut.png';
import beard from '../../assets/img/beard.png';
import shave from '../../assets/img/shave.png';
import heroImage from '../../assets/img/bg.png';

const MiddleSection = () => {
  return (
    <section className='bg-gray-200 py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/3 p-4 inline-flex'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={haircut}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Haircut'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>Haircuts</h2>
              </div>
              <p className='text-gray-700'>
                Our skilled barbers are experts in providing traditional and
                modern haircuts for men of all ages.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4 inline-flex'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={shave}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Shave'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>Shaves</h2>
              </div>
              <p className='text-gray-700'>
                Relax and enjoy a traditional hot towel shave from our
                experienced barbers.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4 inline-flex'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={beard}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Beard Trim'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>
                  Beard Trims
                </h2>
              </div>
              <p className='text-gray-700'>
                Keep your beard looking neat and tidy with a trim and shape from
                our experienced barbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
