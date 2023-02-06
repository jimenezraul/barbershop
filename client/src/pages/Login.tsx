import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import validation from '@jimenezraul/form-validation';
import { loginInputForm } from '../utils/inputForms';
import GoogleLoginButton from '../components/GoogleLogin';
import heroImage from '../assets/img/bg.png';
import Button from '../components/Button';

const initialState = {
  email: '',
  password: '',
  error: {
    email: '',
    password: '',
  },
};

const Login = () => {
  const { loginValidation } = validation;
  const [formState, setFormState] = useState<LoginFormState>(initialState);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  document.title = 'Login';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // Validate email and password
    const isValid = loginValidation(formState, setFormState);

    if (!isValid) {
      setLoading(false);
      return;
    }

    console.log(formState);
    // Send login request to server
    // ...
  };

  const handleformStateChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
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
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className='bg-cover flex bg-gray-200 justify-center items-center flex-1 px-4 py-10 relative h-full'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <form
        className='backdrop-blur-sm lg:backdrop-blur overflow-hidden  relative p-10 z-40 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <div className='absolute -z-10 top-0 right-0 bottom-0 left-0 bg-white opacity-10 p-4'></div>
        <h2 className='text-3xl text-gray-200 text-center font-semibold font-kanit tracking-wider mb-4'>
          Login
        </h2>

        {loginInputForm.map((input, index) => (
          <div key={index}>
            <div className='mb-4'>
              <label
                className='block text-gray-200 font-medium mb-2'
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
          <Button type='submit' loading={loading} children='Login' />
          <Link
            to='/forgot-password'
            className='text-orange-500 hover:text-orange-600'
          >
            Forgot Password?
          </Link>
        </div>
        <div className='mb-4 text-center'>
          <span className='text-gray-400 mr-2'>Don't have an account?</span>
          <Link to='/signup' className='text-orange-500 hover:text-orange-600'>
            Sign Up
          </Link>
        </div>
        <div className='relative flex py-5 items-center'>
          <div className='flex-grow border-t border-gray-500'></div>
          <span className='flex-shrink mx-4 text-gray-500'>or</span>
          <div className='flex-grow border-t border-gray-500'></div>
        </div>
        <div className='flex justify-center items-center'>
          <GoogleLoginButton />
        </div>
      </form>
    </div>
  );
};

export default Login;
