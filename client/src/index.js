import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {FlashProvider} from './context/Flash';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FlashProvider>
        <App />
      </FlashProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
