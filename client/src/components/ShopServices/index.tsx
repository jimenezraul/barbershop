import heroImage from '../../assets/img/bg.png';
import haircut from '../../assets/img/mens-haircut.png';
import kid from '../../assets/img/kid.png';
import eyebrows from '../../assets/img/eyebrows.png';
import Prices from '../Prices';

const ShopServices = () => {
  return (
    <section className='bg-gray-200 pt-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <h1 className='text-3xl lg:text-5xl font-bold text-center text-gray-700 mb-8'>
              Our Services
            </h1>
          </div>
          <div className='w-full lg:w-1/3 p-4 flex'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={haircut}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Haircut'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>
                  Mens Services
                </h2>
              </div>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Haircuts:</span> Our
                skilled barbers use the latest techniques to provide you with a
                stylish and precise haircut. We offer a wide range of cuts for
                men, including classic, modern, and trendy styles.
              </p>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Shaves:</span> Indulge
                in a traditional straight razor shave for the ultimate grooming
                experience. Our barbers use hot towels, pre-shave oils, and
                aftershave balms for a smooth and comfortable shave.
              </p>
              <p className='text-gray-700'>
                <span className='font-semibold text-xl'>Beard grooming:</span>{' '}
                Keep your beard looking neat and well-groomed with our beard
                trimming and shaping services. We use high-quality clippers and
                scissors to sculpt the perfect shape for your beard.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4 flex'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={kid}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Shave'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>
                  Kids Services
                </h2>
              </div>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Haircuts:</span> Our
                skilled barbers use the latest techniques to provide your child
                with a stylish and precise haircut. We offer a wide range of
                cuts for children, including classic, modern, and trendy styles.
              </p>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Hair styling:</span>{' '}
                Whether your child needs a simple style for everyday wear or a
                special look for a special occasion, our barbers can help. We
                offer a range of styling services, including braids, updos, and
                more.
              </p>
              <p className='text-gray-700'>
                <span className='font-semibold text-xl'>
                  Specialized services for kids with special needs:
                </span>{' '}
                Our barbers are trained to cater to children with special needs,
                providing a calm and patient environment while cutting their
                hair.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 p-4'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <img
                src={eyebrows}
                style={{ backgroundImage: `url(${heroImage})` }}
                alt='Beard Trim'
                className='w-full rounded-lg shadow-lg'
              />
              <div className='flex items-center my-4 justify-center'>
                <h2 className='text-2xl font-medium text-gray-700'>
                  Other Services
                </h2>
              </div>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>
                  Shampoo and conditioning:
                </span>{' '}
                We offer shampoo and conditioning services to leave your hair
                clean, healthy and manageable.
              </p>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Hot towel shave:</span>{' '}
                ndulge in a traditional hot towel shave for the ultimate
                grooming experience. Our barbers use hot towels, pre-shave oils,
                and aftershave balms for a smooth and comfortable shave.
              </p>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Facial grooming:</span>{' '}
                We offer facial grooming services such as beard trimming,
                mustache shaping, and ear and nose hair trimming to keep your
                facial hair looking neat and well-groomed.
              </p>
              <p className='text-gray-700 mb-4'>
                <span className='font-semibold text-xl'>Eyebrow grooming:</span>{' '}
                We offer eyebrow grooming services such as shaping, trimming,
                and tinting to keep your eyebrows looking neat and well-groomed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Prices />
    </section>
  );
};

export default ShopServices;
