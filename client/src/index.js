import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {FlashProvider} from './context/Flash';
import { LoggedProvider } from './context/Logged';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedProvider>
        <FlashProvider>
          <App />
        </FlashProvider>
      </LoggedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
