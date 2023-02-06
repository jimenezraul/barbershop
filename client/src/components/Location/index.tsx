import { useState } from 'react';

const Location = () => {
  const [windowWidth] = useState(window.innerWidth);

  return (
    <section className='bg-gray-200 pt-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full'>
            <h1 className='text-3xl font-kanit lg:text-5xl font-bold text-center text-gray-700 mb-8'>
              Our Location
            </h1>
          </div>
          <div className='w-full flex flex-wrap lg:mb-16'>
            <div className='w-full p-4 flex justify-center'>
              <div className='w-full text-center max-w-xl bg-white rounded-lg shadow-lg p-6'>
                <div className='flex items-center justify-center my-4'>
                  <h2 className='text-2xl font-medium text-gray-700'>
                    123 Main Street <br />
                    Anytown, USA
                  </h2>
                </div>
                <p className='text-gray-700 mb-4'>
                  <span className='font-semibold text-xl'>Phone:</span>{' '}
                  123-456-7890
                </p>
                <p className='text-gray-700 mb-4'>
                  <span className='font-semibold text-xl'>Hours:</span> Monday -
                  Saturday: 9am - 6pm
                </p>
                <p className='text-gray-700 mb-4'>
                  <span className='font-semibold text-xl'>Hours:</span> Sunday:
                  Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full'>
            <h1 className='text-3xl font-kanit lg:text-5xl font-bold text-center text-gray-700 mb-8'>
              Google Map
            </h1>
          </div>
          <div className='flex flex-wrap lg:mb-16'>
            <div className='w-full lg:w-1/3 p-4 flex'>
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <div className='flex items-center my-4 justify-center'>
                  <h2 className='text-2xl font-medium text-gray-700'>
                    <iframe
                      title='Google Map'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9999999999995!2d-73.9852816847391!3d40.74881797932499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1b8b8b8b7%3A0x8b8b8b8b8b8b8b8b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s'
                      width={windowWidth > 768 ? '600' : `${windowWidth - 80}`}
                      height='450'
                      style={{ border: 0 }}
                      loading='lazy'
                    ></iframe>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
