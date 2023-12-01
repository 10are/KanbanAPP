import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RegisterForm from './components/auth/RegisterForm';
import Kanban from './components/auth/Kanban';


function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/k" element={<Kanban />} />

    </Routes>
  );
}

export default App;
