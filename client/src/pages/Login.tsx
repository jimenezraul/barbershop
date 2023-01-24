import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate email and password
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }
    // Send login request to server
    // ...
  };

  return (
    <div className='flex bg-gray-200 justify-center items-center flex-1 px-4'>
      <form
        className='bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl text-gray-700 text-center font-semibold font-kanit tracking-wider mb-4'>Login</h2>
        {error && <div className='text-red-500 mb-2'>{error}</div>}
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
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='border border-gray-400 p-2 rounded-lg w-full'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-6 flex justify-between items-center'>
          <button
            type='submit'
            className='bg-orange-500 text-xl text-white py-2 px-5 rounded-lg hover:bg-orange-600'
          >
            Login
          </button>
          <Link to='/register' className='text-orange-500 text-xl hover:text-orange-600'>
            Register
          </Link>
        </div>
        <div className='mb-4 text-end'>
          <Link to='/forgot-password' className='text-orange-500 hover:text-orange-600'>
            Forgot Password?
          </Link>
        </div>
        <div className='relative flex py-5 items-center'>
          <div className='flex-grow border-t border-gray-500'></div>
          <span className='flex-shrink mx-4 text-gray-500'>or</span>
          <div className='flex-grow border-t border-gray-500'></div>
        </div>
        <div className='flex justify-center items-center'>
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            useOneTap
            width='250'
            text='signin_with'
            size='large'
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
