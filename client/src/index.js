import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';

const RunApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/" element={<RunApp />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
export default AppRouter;
