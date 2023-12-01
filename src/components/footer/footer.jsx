import React from 'react';
import { FaQuestionCircle, FaCogs, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border border-gray-300 w-full py-10">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <a
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              <FaQuestionCircle className="inline-block mr-2" />
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              <FaCogs className="inline-block mr-2" />
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              href="https://github.com/10are" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="inline-block mr-2" />
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              href="https://www.linkedin.com/in/onuryilmazeeg/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
