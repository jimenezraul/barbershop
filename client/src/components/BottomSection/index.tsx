import heroImage from '../../assets/img/bg.png';

const BottomSection = () => {
  return (
    <section
      className='relative py-8 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
      <div className='relative container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/3 p-4'>
            <div className='rounded-lg shadow-lg p-6 text-center'>
              <div className='flex justify-center items-center mb-4'>
              <i className="bg-gray-100 text-4xl text-orange-400 border border-orange-400 rounded-lg p-3 mr-2 fa-solid fa-map-location"></i>
                <h2 className='text-2xl font-medium text-white'>Location</h2>
              </div>
              <p className='text-gray-400'>
                Our barbershop is located at: <br />
                <span className='text-xl text-gray-400 font-bold'>
                  123 Main Street, Anytown USA.
                </span>
              </p>
              <p className='text-gray-400 mt-4'>
                We are open Monday-Saturday from 9am-6pm.
              </p>
              <button className='transtition border border-orange-400 hover:bg-orange-400 hover:text-white text-2xl font-bold text-orange-400 px-6 py-2 rounded-lg mt-6'>
                Learn more
              </button>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4'>
            <div className='rounded-lg shadow-lg p-6 text-center'>
              <div className='flex justify-center items-center mb-4'>
              <i className="bg-gray-100 text-4xl text-orange-400 border border-orange-400 rounded-lg p-3 mr-2 fa-regular fa-calendar-check"></i>
                <h2 className='text-2xl font-medium text-white'>
                  Appointments
                </h2>
              </div>
              <p className='text-gray-400'>
                We accept appointments and walk-ins. <br /> You can book your
                appointment online or by giving us a call at:{' '}
                <span className='font-bold text-xl'>555-555-5555.</span>
              </p>
              <button className='transtition border border-orange-400 hover:bg-orange-400 hover:text-white text-2xl font-bold text-orange-400 px-6 py-2 rounded-lg mt-6'>
                Book Now
              </button>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4'>
            <div className='rounded-lg shadow-lg p-6 text-center'>
              <div className='flex justify-center items-center mb-4'>
              <i className="bg-gray-100 text-4xl text-orange-400 border border-orange-400 rounded-lg p-3 mr-2 fa-solid fa-mobile-screen-button"></i>
                <h2 className='text-2xl font-medium text-white'>
                  Contact Us
                </h2>
              </div>
              <p className='text-gray-400 mb-6'>
                For any questions or concerns, please don't hesitate to contact
                us at <br /><span className='font-bold text-xl'>555-555-5555</span> <br/> or
                email us at<br />
                <span className='font-bold text-xl'>barbershop@email.com</span>
              </p>
              <a href="mailto:example@example.com" className='transtition border border-orange-400 hover:bg-orange-400 hover:text-white text-2xl font-bold text-orange-400 px-6 py-2 rounded-lg mt-6'>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
