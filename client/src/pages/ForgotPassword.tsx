import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  document.title = "Forgot-Password"
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate email and password
    console.log(email);
    // Send login request to server
    // ...
  };

  return (
    <div className='flex bg-gray-200 justify-center items-center flex-1 px-4 py-10'>
      <form
        className='bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl text-gray-700 text-center font-semibold font-kanit tracking-wider mb-4'>
          Forgot Password
        </h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='border border-gray-400 p-2 rounded-lg w-full'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6 flex justify-between items-center'>
          <button
            type='submit'
            className='bg-orange-500 text-xl text-white py-2 px-5 rounded-lg hover:bg-orange-600'
          >
            Send Reset Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
