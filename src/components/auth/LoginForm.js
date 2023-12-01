import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';

  const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });
  const handleLogin = async () => {
    try {
      const response = await dispatch(loginUser(loginData));

      if (response.payload.user) {
        console.log("Redirecting to /education");
        navigate('/education');
      } else {
        console.log("Login unsuccessful");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex items-center pb-72 justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Welcome Back!</h2>
        <form>
          <label className="block mb-4 text-lg text-gray-700">Username or Email:</label>
          <input
            className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            value={loginData.identifier}
            onChange={(e) => setLoginData({ ...loginData, identifier: e.target.value })}
          />
          <label className="block mb-4 text-lg text-gray-700">Password:</label>
          <input
            className="w-full p-4 border rounded-md mb-6 focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-500 focus:ring-0 focus:outline-none"
                id="kvkkCheckbox"
              />
              <label htmlFor="kvkkCheckbox" className="ml-2 text-sm text-gray-600">
                Hesabı Açık Tut
              </label>
            </div>
            <Link  className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 w-full focus:outline-none"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-lg text-gray-700 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Create one</Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
