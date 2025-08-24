import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import BasicChartsDemo from './pages/BasicChartsDemo.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './i18n';
import { NavBar } from './components/NavBar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/charts" element={<BasicChartsDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
