import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='socials__header'>
      <a href='https://linkedin.com' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://dribbble.com' target='_blank'>
        <AiOutlineDribbble />
      </a>
      <span className='social__line'></span>
    </div>
  );
};

export default HeaderSocials;
