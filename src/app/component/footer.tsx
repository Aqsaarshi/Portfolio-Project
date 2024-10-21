import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-slate-400	">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../public/assets/aqsapic.jpg")} // Accessing from public directory
              alt="AQSA ARSHAD"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl">AQSA ARSHAD </span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 AQSA ARSHAD —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.youtube.com/@aqsaarshi9916"
              className="text-black mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aqsaarshi5/"
              className="text-black mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/khubsuratarar/"
              className="text-black mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size={24} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;