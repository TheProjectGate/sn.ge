import React, { JSX } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import MainLayout from './components/layout/MainLayout';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
