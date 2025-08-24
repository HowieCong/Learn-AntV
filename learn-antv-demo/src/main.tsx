import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import BasicBarDemo from './BasicBarDemo.tsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav style={{ padding: 16, background: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: 16 }}>Home首页</Link>
        <Link to="/bar-demo">BarDemo柱状图实战</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bar-demo" element={<BasicBarDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
