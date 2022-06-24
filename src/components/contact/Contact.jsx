import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contact = [
  {
    logo: <MdOutlineEmail />,
    title: "Email",
    communicate: "support@gmail.com",
    message: "Send a message",
  },
  {
    logo: <RiMessengerLine />,
    title: "Messanger",
    communicate: "RDJoy",
    message: "Send a message",
  },
  {
    logo: <BsWhatsapp />,
    title: "WhatsApp",
    communicate: "123-358-8340",
    message: "Send a message",
  },
];

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__cards'>
          {contact.map(({ logo, title, communicate, message }, index) => {
            return (
              <article key={index} className='contact__card'>
                <div className='contact__icon'>{logo}</div>
                <h4>{title}</h4>
                <h5>{communicate}</h5>
                <a href='#contact'>{message}</a>
              </article>
            );
          })}
        </div>
        <form className='contact__form'>
          <input type='text' placeholder='Your Full Name' required />
          <input type='email' placeholder='Your Email' required />
          <textarea type='text' placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
