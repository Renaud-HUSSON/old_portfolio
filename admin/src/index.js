import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import { LoggedProvider } from './contexts/Logged'
import { AlertProvider } from './contexts/Alert'

require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
      <AlertProvider>
        <LoggedProvider>
          <App />
        </LoggedProvider>
      </AlertProvider>
    </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
