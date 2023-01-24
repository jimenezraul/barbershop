import { useState, ChangeEvent } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import validation from '@jimenezraul/form-validation';

const registerInput = [
  {
    name: 'given_name',
    label: 'First Name',
    type: 'text',
  },
  {
    name: 'family_name',
    label: 'Last Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    name: 'confirm_password',
    label: 'Confirm Password',
    type: 'password',
  },
];

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
  const [formState, setFormState] = useState<RegisterFormState>(initialState);
  const [regRes, setRegRes] = useState<RegisterUseState>(initialFormUseState);
  document.title = 'Register';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form
    const isValid = validation.registerValidation(formState, setFormState);

    if (!isValid) return;

    console.log(formState);

    // example of how to set registration response
    // setRegRes({
    //   success: false,
    //   message: 'Registration failed',
    //   subMessage: 'Please try again',
    // });
    // Send login request to server
    // ...
  };

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState({
      ...formState,
      [name]: value,
      error: {
        ...formState.error,
        [name]: '',
      },
    });

    if (regRes) setRegRes(initialFormUseState);
  };

  return (
    <div className='flex bg-gray-200 justify-center items-center flex-1 px-4 py-10'>
      <form
        className='bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl text-gray-700 text-center font-semibold font-kanit tracking-wider mb-4'>
          Register
        </h2>

        {registerInput.map(({ name, label, type }, index) => (
          <div key={index} className='mb-4'>
            <label
              className='block text-gray-700 font-medium mb-2'
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
        ))}
        <div
          className={`${
            regRes.success ? 'text-green-500' : 'text-red-500'
          } text-lg text-center mb-4`}
        >
          {regRes.message} <br />
          {regRes.subMessage}
        </div>
        <div className='mb-6 flex justify-between items-center'>
          <button
            type='submit'
            className='bg-orange-500 text-xl text-white py-2 px-5 rounded-lg hover:bg-orange-600'
          >
            Register
          </button>
        </div>
        <div className='mb-4 text-center'>
          Already have an account?{' '}
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
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            useOneTap
            width='250'
            text='signup_with'
            size='large'
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
