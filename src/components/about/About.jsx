import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container container__about'>
        <div className='about__content'>
          <div className='about__me'>
            <div className='about__img'>
              <img src={MeAbout} alt='person' />
            </div>
          </div>
          <div className='about__desc'>
            <div className='about__cards'>
              <div className='about__card'>
                <a href='#'>
                  <FaAward />
                </a>
                <h4>Experience</h4>
                <p>3+ Years experience</p>
              </div>
              <div className='about__card'>
                <a href='#'>
                  <HiUsers />
                </a>
                <h4>Clients</h4>
                <p>300+ worldwide</p>
              </div>
              <div className='about__card'>
                <a href='#'>
                  <AiFillProject />
                </a>
                <h4>projects</h4>
                <p>80+ Completed</p>
              </div>
            </div>
            <p className='about__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus tempora quaerat quos, delectus libero nisi molestias
              laborum velit est id saepe vitae dicta nihil maxime accusantium
              debitis quod qui dolor quae! Enim quasi, tempore a eos nostrum
              temporibus voluptates dignissimos. magni perferendis, sequi esse!
            </p>
            <a href='#contact' className='btn btn-primary'>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
