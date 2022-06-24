import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section id='footer' className='footer__container'>
      <h1>RDJoy</h1>
      <ul className='footer__lists'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
      </ul>
      <div className='footer__icons'>
        <a href='https://www.facebook.com' target='_blank'>
          <FaFacebookF className='footer__icon' />
        </a>
        <a href='https://www.instagram.com' target='_blank'>
          <BsInstagram className='footer__icon' />
        </a>
        <a href='https://www.twitter.com' target='_blank'>
          <BsTwitter className='footer__icon' />
        </a>
      </div>
      <div className='copyrights'>
        <p>&copy; RDJoy tutorials. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
