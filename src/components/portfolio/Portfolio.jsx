import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portFolio = [
  {
    id: 1,
    image: IMG1,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/17661138-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 2,
    image: IMG2,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/17992247-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Service templates for video streaming",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/16955838-Service-templates-for-video-streaming",
  },
  {
    id: 4,
    image: IMG4,
    title: "Budget tracking service template",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/16955808-Budget-tracking-service-template",
  },
  {
    id: 5,
    image: IMG5,
    title: "Game streaming templates",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/16811926-Game-streaming-templates",
  },
  {
    id: 6,
    image: IMG6,
    title: "Templates for Startups / Eclipse UI KIT",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/16811779-Templates-for-Startups-Eclipse-UI-KIT",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portFolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio'>
              <div className='portfolio__img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__cta'>
                <a href={github} className='btn'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
