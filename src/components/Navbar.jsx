import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-2">
        {/* <img
          src="https://cdn-icons-png.freepik.com/256/12452/12452507.png?ga=GA1.1.1575563360.1730722946&semt=ais_hybrid"
          alt="Navbar Icon"
          className="mx-2"
          width={50}
          height={33}
        /> */} 
        <FaDesktop size={28}/>
        <p className="text-3xl font-bold"
           
        >
        SS
        
        </p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shaqeeb-shaikh-5a7a0a209/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shk123s"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shaqeebshaikh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/shaqeeb_sk?t=_2iAFXrI4Dsi5D2JQmooeg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
