import React from "react";
import "./services.css";
import { RiCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container service__container'>
        <div className='service'>
          <div className='service__header'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__content'>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='service__header'>
            <h3>Web Developer</h3>
          </div>
          <ul className='service__content'>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='service__header'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__content'>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <RiCheckLine className='service__icon' />
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
