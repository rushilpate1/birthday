// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ScrapbookPage from './ScrapbookPage';
import LetterPage from './LetterPage'; // Import the new LetterPage component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scrapbook" element={<ScrapbookPage />} />
        <Route path="/letter" element={<LetterPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
