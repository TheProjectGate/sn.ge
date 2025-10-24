import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/Index.scss'
import App from './App'
import './assets/styles/Fonts.scss'
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
