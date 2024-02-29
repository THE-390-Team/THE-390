import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { AuthProvider } from './utils/hooks/AuthContext';
import { ProfileProvider } from './utils/hooks/ProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
      <App />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
