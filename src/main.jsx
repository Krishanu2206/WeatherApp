import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Weatherprovider } from './weathercontext.jsx';

createRoot(document.getElementById('root')).render(
  <Weatherprovider>
    <App />
  </Weatherprovider>
)
