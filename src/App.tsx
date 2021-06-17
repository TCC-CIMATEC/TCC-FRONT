import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/index';

import {GlobalStyle} from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
