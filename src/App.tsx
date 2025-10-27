import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import MainLayout from './components/layout/MainLayout';

function App(): JSX.Element {
  return (
    <Router basename="/sn.ge">
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
