// d:\Web-Blog\sngeorgia.ge\web\sn-georgia-react\src\main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/styles/fonts.css' // <-- Это правильный импорт

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
