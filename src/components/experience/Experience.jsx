import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
      <div className='container exp__container'>
        <div className='exp__frontend'>
          <h2>Frontend Development</h2>
          <div className='exp__content'>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>HTML</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>CSS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Javascript</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Bootstrap</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Tailwind</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>React JS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='exp__backend'>
          <h2>Backend Development</h2>
          <div className='exp__content'>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Node JS</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Express JS</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='exp__details'>
              <MdVerified className='exp__icon' />
              <div className='exp__desc'>
                <h4>Python</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
