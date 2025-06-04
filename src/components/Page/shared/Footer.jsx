import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-white p-10">
        <aside>
          
          <p className="font-bold">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">           
              <Link to={'/facebook.com'}> <FaFacebook size={24} /> </Link>
              <Link to={'/instagram.com'} > <FaInstagram size={24}   /> </Link>
              <Link to={'/linkedin.com'}> <IoLogoLinkedin size={24}  /> </Link>
            
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
