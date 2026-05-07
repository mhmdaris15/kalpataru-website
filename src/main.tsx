import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

// Vite injects BASE_URL from `vite.config.ts` (e.g. "/kalpataru-website/").
// React Router needs the same prefix as `basename` so that <Link to="/menu" />
// rewrites to /kalpataru-website/menu in production while still working as
// /menu during local dev (where BASE_URL is "/").
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
