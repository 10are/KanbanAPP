import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerStatus = useSelector((state) => state.auth.status);
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const handleRegister = async () => {
    await dispatch(registerUser(userData));
    if (registerStatus === 'succeeded') {
      navigate('/login');
    }
  };
  return (
    <div className="flex items-center pb-72 justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-500">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-600">Register</h2>
        <form>
          <label className="block mb-4 text-lg text-gray-700">Username:</label>
          <input
            className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring focus:border-green-300"
            type="text"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
          <label className="block mb-4 text-lg text-gray-700">Email:</label>
          <input
            className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring focus:border-green-300"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <label className="block mb-4 text-lg text-gray-700">Password:</label>
          <input
            className="w-full p-4 border rounded-md mb-6 focus:outline-none focus:ring focus:border-green-300"
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="text-green-500 focus:ring-0 focus:outline-none"
              id="kvkkCheckbox"
            />
            <label htmlFor="kvkkCheckbox" className="ml-2 text-sm text-gray-600">
              I accept the terms and conditions.
            </label>
          </div>
          <button
            className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600 w-full focus:outline-none"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-lg text-gray-700 text-center">
          Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
