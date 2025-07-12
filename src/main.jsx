import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirebaseProvider } from './firebase.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
)
