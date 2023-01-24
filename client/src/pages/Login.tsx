import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import validation from '@jimenezraul/form-validation';
import inputs from '../utils/loginInputs.json';
const initialState = {
  email: '',
  password: '',
  error: {
    email: '',
    password: '',
  },
};

const Login = () => {
  const [formState, setFormState] = useState<LoginFormState>(initialState);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  document.title = 'Login';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Validate email and password
    const isValid = validation.validation(formState, setFormState);
    
    if (!isValid) {
      setLoading(false);
      return;
    }

    console.log(formState);
    // Send login request to server
    // ...
  };

  const handleformStateChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      error: {
        ...formState.error,
        [name]: '',
      },
    });

    if (errors) setErrors('');
  };

  return (
    <div className='flex bg-gray-200 justify-center items-center flex-1 px-4 py-10'>
      <form
        className='bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl text-gray-700 text-center font-semibold font-kanit tracking-wider mb-4'>
          Login
        </h2>

        {inputs.map((input, index) => (
          <div key={index}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-medium mb-2'
                htmlFor='email'
              >
                {input.label}
              </label>
              <input
                className='border border-gray-400 p-2 rounded-lg w-full'
                type={input.type}
                name={input.name}
                value={formState[input.name as keyof LoginFormState['error']]}
                onChange={(e) => handleformStateChange(e)}
              />
              {formState.error && (
                <div className='text-red-500 my-2'>
                  {formState.error[input.name as keyof LoginFormState['error']]}
                </div>
              )}
            </div>
          </div>
        ))}

        {errors && <div className='text-red-500 mb-4'>{errors}</div>}
        <div className='mb-6 flex justify-between items-center'>
          <button
            type='submit'
            {...(loading && { disabled: true })}
            // add loading animation
            className={`bg-orange-500 transition-all ease-in-out text-xl text-white py-2 px-5 rounded-lg hover:bg-orade-600 ${loading &&
              'opacity-50'}`}
          >
            {loading && <i className='fas fa-spinner fa-spin mr-2'></i>}
            Login
          </button>
          <Link
            to='/register'
            className='text-orange-500 text-xl hover:text-orange-600'
          >
            Register
          </Link>
        </div>
        <div className='mb-4 text-end'>
          <Link
            to='/forgot-password'
            className='text-orange-500 hover:text-orange-600'
          >
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
