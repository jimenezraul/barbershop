import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='759091763684-m7nlinpjcjuil9t8qpetf2qfhnhmvvvb.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
