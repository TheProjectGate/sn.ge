import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import GalleryPage from './components/pages/GalleryPage';
import MainLayout from './components/layout/MainLayout';
import ScrollToAnchor from './components/ScrollToAnchor';

function App(): JSX.Element {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout show_header={false}><GalleryPage /></MainLayout>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
