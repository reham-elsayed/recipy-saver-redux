import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from '../Redux/store/store.js';
import { Provider } from 'react-redux'
import AuthProvider from '../context/authContext/authContext.jsx';
import SavedRecipyProvider from '../context/SavedRecipyContext/SavedrecipyContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <AuthProvider>
    <SavedRecipyProvider>
    <App />
    </SavedRecipyProvider>
    
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
