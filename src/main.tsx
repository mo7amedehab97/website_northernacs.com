import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App';
import { LanguageProvider } from './components/LanguageProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
        <Toaster position="top-right" richColors />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
