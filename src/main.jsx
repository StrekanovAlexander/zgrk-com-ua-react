import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/style.scss';
import App from './js/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
