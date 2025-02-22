import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prac from './prac.jsx'
import Forms from './forms.jsx'

const root=createRoot(document.getElementById('root'))
root.render(
  <App />
)
