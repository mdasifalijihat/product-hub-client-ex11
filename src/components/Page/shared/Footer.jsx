import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white p-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="font-extrabold text-3xl text-gray-800 mb-2">
            ProductQueryHub
          </h1>
          <p className="text-gray-600 mb-4 max-w-md">
            Your trusted platform for product recommendations and expert queries.
          </p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <IoLogoLinkedin size={28} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
