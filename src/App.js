import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import Kanban from './components/auth/Kanban';


function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
