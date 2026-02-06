import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/main.css'

const redirect = sessionStorage.redirect
delete sessionStorage.redirect

if (redirect && redirect !== '/') {
  window.history.replaceState(null, null, redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
