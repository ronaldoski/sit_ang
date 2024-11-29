import React from 'react';
import Card from './Card';
import Img from './Img'; // Ensure correct case
import kSvg from './2k.svg';
import CSvg from './image/camera.svg';
import Msvg from './image/mob.svg';
import Wsvg from './image/web.svg';
import Asvg from './image/automate.svg';
import styles from './Card.module.css';

const HomePage: React.FC = () => {
  const images = [
    { src: kSvg, alt: "2K logo", hoverText: "2K Logo" },
    { src: CSvg, alt: "Camera logo", hoverText: "video editing" },
    { src: Asvg, alt: "Automate logo", hoverText: " automation software" },
    { src: Msvg, alt: "Mobile logo", hoverText: "Mobile development" },
    { src: Wsvg, alt: "Web logo", hoverText: "Web development" }
  ];

  return (
    <div >
      <header >
        <nav className={styles.navigation}>
          <button onClick={() => document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' })}>
            Présentation
          </button>
          <button onClick={() => document.getElementById('objectif')?.scrollIntoView({ behavior: 'smooth' })}>
            Objectif
          </button>
          <button onClick={() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' })}>
            Hobbies
          </button>
          <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            Compétences
          </button>
        </nav>
      </header>

      <main className={styles.container}>
        <div id="presentation" className={styles.row}>
          <Img images={[{ src: kSvg, alt: "2K logo", hoverText: "2K Logo" }]} />
          <Card 
            Titre="Présentation" 
            text="hello I am bilal, I am 22 years old, I am a student in industrial informatics at helha charleroi . 
            I am actively looking for an traineeship in it, the industrial automation or the web/ application development."
          />
        </div>

        <div id="objectif" className={styles.column}>
          <Card 
            Titre="Objectif"
            text="I would like to find an traineeship in I.T, web or mobile programming, 
            in industrial automation on machines such as scheneider or siemens"
          />
        </div>

        <div id="hobbies" className={styles.column}>
          <Card 
            Titre="Hobbies"
            text="during my free time I like to do group sports as football or individual gym.
             I also like to read books "
          />
        </div>

        <div id="skills" className={styles.column}>
          <h2>Skills</h2>
          <Img images={[
            { src: CSvg, alt: "Camera logo", hoverText: "Camera Logo" },
            { src: Asvg, alt: "Automate logo", hoverText: "Automate Logo" },
            { src: Msvg, alt: "Mobile logo", hoverText: "Mobile Logo" },
            { src: Wsvg, alt: "Web logo", hoverText: "Web Logo" }
          ]} />
        </div>
      </main>

      
    </div>
  );
};

export default HomePage;