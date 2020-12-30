import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import { LoggedProvider } from './contexts/Logged'

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedProvider>
        <App />
      </LoggedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
