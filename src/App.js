import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';
import RegisterForm from './components/auth/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/education" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
