// d:\Web-Blog\sngeorgia.ge\web\sn-georgia-react\src\main.tsx
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import './assets/styles/fonts.css' // <-- Это правильный импорт
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error("Failed to find the root element with id 'root'")
}

const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
