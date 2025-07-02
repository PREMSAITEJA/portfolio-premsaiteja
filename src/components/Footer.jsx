import React from "react";
import { socialMedia } from "../../data";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mx-auto max-w-7xl px-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 <br />
          <span className="font-semibold">Prem Sai Teja</span>
        </p>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-white text-sm md:text-base mr-2">Let's Connect</span>
          <div className="flex gap-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:scale-110 hover:bg-opacity-90"
                title={info.name}
              >
                <img
                  src={info.icon}
                  alt={info.name}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
