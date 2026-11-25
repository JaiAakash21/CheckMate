import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocalDemo from './LocalDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {import.meta.env.VITE_LOCAL_DEMO === 'true' ? <LocalDemo /> : <App />}
  </StrictMode>,
)
