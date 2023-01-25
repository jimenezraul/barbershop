import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import validation from '@jimenezraul/form-validation';
import inputs from '../utils/registrationInputs.json';
import GoogleLoginButton from '../components/GoogleLogin';
import heroImage from '../assets/img/bg.png';

const initialState = {
  given_name: '',
  family_name: '',
  email: '',
  password: '',
  confirm_password: '',
  error: {
    given_name: '',
    family_name: '',
    email: '',
    password: '',
    confirm_password: '',
  },
};

const initialFormUseState = {
  success: false,
  message: '',
  subMessage: '',
};

const Register = () => {
  const { registerValidation } = validation;
  const [formState, setFormState] = useState<RegisterFormState>(initialState);
  const [regRes, setRegRes] = useState<RegisterResponse>(initialFormUseState);
  const [loading, setLoading] = useState(false);

  document.title = 'Register';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    const isValid = registerValidation(formState, setFormState);

    if (!isValid) {
      setLoading(false);
      return;
    }

    console.log(formState);

    // example of how to set registration response
    // setRegRes({
    //   success: false,
    //   message: 'Something went wrong',
    //   subMessage: 'Please try again',
    // });
    // Send login request to server
    // ...
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    let error = {};
    // if name is equal to password or confirm_password then set both to empty string at the same time
    if (name === 'password' || name === 'confirm_password') {
      error = {
        password: '',
        confirm_password: '',
      };
    }
    setFormState({
      ...formState,
      [name]: value,
      error: {
        ...formState.error,
        ...error,
        [name]: '',
      },
    });

    if (regRes) setRegRes(initialFormUseState);
  };

  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className='bg-cover flex bg-gray-200 justify-center items-center flex-1 px-4 py-10 relative'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <form
        className='backdrop-blur-sm lg:backdrop-blur overflow-hidden  relative p-10 z-40 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <div className='absolute -z-10 top-0 right-0 bottom-0 left-0 bg-white opacity-10 p-4'></div>
        <h2 className='text-3xl text-gray-200 text-center font-semibold font-kanit tracking-wider mb-4'>
          Sign Up
        </h2>

        {inputs.map(
          ({ name, label, type }: RegistrationInputs, index: number) => (
            <div key={index} className='mb-4'>
              <label
                className='block text-gray-200 font-medium mb-2'
                htmlFor={label}
              >
                {label}
              </label>
              <input
                className='border border-gray-400 p-2 rounded-lg w-full'
                type={type}
                name={name}
                value={formState[name as keyof RegisterFormState['error']]}
                onChange={(e) => handleChange(e)}
              />
              {formState.error && (
                <div className='text-red-500 mb-2'>
                  {formState.error[name as keyof RegisterFormState['error']]}
                </div>
              )}
            </div>
          )
        )}
        {regRes.message && (
          <div
            className={`${
              regRes.success ? 'text-green-500' : 'text-red-500'
            } text-lg text-center mb-4`}
          >
            {regRes.message} <br />
            {regRes.subMessage}
          </div>
        )}
        <div className='mb-6 flex justify-between items-center'>
          <button
            type='submit'
            className={`bg-orange-500 text-xl text-white py-2 px-5 rounded-lg hover:bg-orange-600 ${
              loading && 'opacity-50'
            }`}
          >
            {loading && <i className='fas fa-spinner fa-spin mr-2'></i>}
            Register
          </button>
        </div>
        <div className='mb-4 text-center'>
          <span className='text-gray-400 mr-2'>Already have an account?</span>
          <Link to='/login' className='text-orange-500 hover:text-orange-600'>
            Login
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

export default Register;
