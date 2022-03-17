import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeContaxtProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContaxtProvider>
      <App />
    </DarkModeContaxtProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
