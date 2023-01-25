import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  
  const handleLogin = async () => {
    console.log('Login');
  };

  const handleError = () => {
    console.log('error');
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={handleError}
      useOneTap
      width='250'
      text='signin_with'
      size='large'
    />
  );
};

export default GoogleLoginButton;
