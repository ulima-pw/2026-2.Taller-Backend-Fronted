import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/2026-2.Taller-Backend-Fronted'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
