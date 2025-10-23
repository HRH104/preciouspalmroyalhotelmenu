import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Ensure there's a mount point (index.html already includes #react-root, but be resilient)
let rootEl = document.getElementById('react-root')
if (!rootEl) {
  rootEl = document.createElement('div')
  rootEl.id = 'react-root'
  document.body.appendChild(rootEl)
}

const root = createRoot(rootEl)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
