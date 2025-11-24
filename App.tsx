import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SelfInsurancePage from './pages/SelfInsurancePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/self-insurance-risks" element={<SelfInsurancePage />} />
            {/* Redirect root to the target page for this demo */}
            <Route path="/" element={<Navigate to="/self-insurance-risks" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;