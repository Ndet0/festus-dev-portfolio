import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// /admin is the private photo upload page. It's loaded lazily so the upload
// SDK never ships with the public site. There's no router: Netlify rewrites
// every path to index.html, so we just check the pathname.
const Admin = lazy(() => import('./Admin.jsx'))
const isAdmin = window.location.pathname.replace(/\/+$/, '') === '/admin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isAdmin ? (
      <Suspense fallback={null}>
        <Admin />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>,
)
