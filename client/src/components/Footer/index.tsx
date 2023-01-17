const Footer = () => {
  return (
    <footer className='bg-black py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 p-4 text-center'>
            <h2 className='text-lg font-medium text-white'>About Us</h2>
            <p className='text-white'>
              We are a family-owned barbershop, dedicated to providing the best
              grooming services for men.
            </p>
          </div>
          <div className='w-full lg:w-1/2 p-4 text-center'>
            <h2 className='text-lg font-medium text-white'>Follow Us</h2>
            <div className='flex justify-center items-center space-x-4 mt-3'>
              <i className='text-4xl text-gray-200 fa-brands fa-facebook'></i>
              <i className='text-4xl text-gray-200 fa-brands fa-instagram'></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
