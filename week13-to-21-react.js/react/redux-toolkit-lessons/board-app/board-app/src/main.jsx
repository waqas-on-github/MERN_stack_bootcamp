import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {Store} from './features/posts/Store'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={Store} >

    <App />

    </Provider>
  </React.StrictMode>,
)
