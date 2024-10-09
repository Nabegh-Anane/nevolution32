import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import for React 18+
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Privacy from './components/termesprivacy/privacy.jsx';
import Termes from './components/termesprivacy/termes.jsx';
import App from "./App.jsx";
import "./index.css";

// Renamed to avoid conflict with the default "App"
const MainApp = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/termes" element={<Termes />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

// Use createRoot for React 18+
reactRoot.render(<MainApp />);
