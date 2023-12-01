import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAlgolia } from 'react-icons/fa';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
   
    <nav className="bg-customColor-100 p-8 items-start justify-start">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <div className="text-white font-bold space-x-6 text-xl flex items-center">
        <Link to="/" className="text-black text-orange-600 px-4 py-2 rounded-full bg-gray-200 transition duration-300">
            EduWeb
          </Link>
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/education" className="text-white hover:text-gray-300 transition duration-300">
            Courses
          </Link>
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            Faq
          </Link>
        </div>
        <div className="text-white flex items-center space-x-2">
          {user ? (
            <>
              <span className="hidden sm:inline">Welcome, </span>
              <FaAlgolia className="text-#F46176" />
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
