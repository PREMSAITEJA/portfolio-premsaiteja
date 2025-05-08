"use client";

import React from "react";
import { socialMedia } from "../../data"; // Ensure the correct path to the data file

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ml-7">
        <p className="md:text-base text-sm md:font-normal font-light pl-10">
          Copyright © 2025 <br />
          <span> Prem Sai Teja </span>
        </p>
        <div className="flex items-center md:gap-3 gap-6 mr-12 w-full md:w-auto">
          Let's Connect
          <br />
          
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // Use the link from the socialMedia data
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 overflow-hidden transition-transform duration-600 hover:scale-105"
            >
              <img
                src={info.icon}
                alt={info.name}
                className="w-auto h-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 overflow-hidden transition-transform duration-600 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
