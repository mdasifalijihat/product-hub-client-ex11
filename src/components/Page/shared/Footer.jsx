import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[rgb(255,98,84)] text-white p-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="font-extrabold text-3xl  mb-2">
            ProductQueryHub
          </h1>
          <p className="mb-4 max-w-md">
            Your trusted platform for product recommendations and expert queries.
          </p>
          <p className="text-sm ">
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
                className=" hover:text-blue-600 transition-colors"
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
                className=" hover:text-pink-500 transition-colors"
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
                className=" hover:text-blue-700 transition-colors"
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
