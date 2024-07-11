import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex justify-between mb-14 md:mb-0 py-6 border-t-2 border-text-secondary">
      {/* https://www.nexxel.dev/ for the idea */}
      <p>Bidhan Bhuwai</p>
      <div className="flex gap-3">
        <a href="mailto:bhuwaibidhan@gmail.com" target="_blank">
          <MdOutlineEmail size={20} />
        </a>
        <a href="https://github.com/beedhan" target="_blank">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/beedhan" target="_blank">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com/beedhanbhuwai" target="_blank">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
