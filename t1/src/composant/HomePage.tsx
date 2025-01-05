import React from 'react';
import Card from './Card';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
const HomePage: React.FC = () => {
  
  const navigate = useNavigate();
  return (
    <div >
      
  {/* <nav className={styles.navigation}>
          <button onClick={() => document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' })}>
            Présentation
          </button>
          <button onClick={() => document.getElementById('objectif')?.scrollIntoView({ behavior: 'smooth' })}>
            Objectif
          </button>
          <button onClick={() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' })}>
            Hobbies
          </button>
          
        </nav>

     */ } 
     <Typography sx={{width:600 }}>
   <button onClick={() => navigate('/contact-page')}  >
        cv
      </button>
      </Typography>
      <main className={styles.container}>
      
          
          

          <body className={styles.grid}>
          <div id="presentation" className={styles.column}>
          <Card
            Titre="Présentation🙋"
            text="I am Bilal, I am 22 years old, student in industrial informatics at Helha Charleroi. I am actively looking for an traineeship in IT, industrial automation, or web/application development."
          />
        </div>

        {/* Objectif Section */}
        <div id="objectif" className={styles.column}>
          <Card
            Titre="Objectif🎯"
            text="I would like to find a traineeship in IT, web or mobile programming, in industrial automation on machines such as Schneider or Siemens."
          />
        </div>

        {/* Hobbies Section */}
        <div id="hobbies" className={styles.column}>
          <Card
            Titre="Hobbies⚽"
            text="When I'm not busy, I like to participate in group sports like football or individual gym. I also enjoy reading books."
          />
        </div>

        {/* New Sections */}
        <div className={styles.column}>
          <Card
            Titre="Video Editing🎥"
            text="I have notions of Adobe Suite, such as Premiere Pro and Photoshop, learned by myself."
          />
        </div>

     
        <div className={styles.column}>
          <Card
            Titre="Automation 🤖"
            text="During my studies, I learned to use Schneider and Siemens software. I also learned to make electronic plans and use automation systems through a firewall like Flexy or in a network with eCatcher."
          />
        </div>

        <div className={styles.column}>
          <Card
            Titre="Mobile Development 📱"
            text="I can code web applications in React Native or Java."
          />
        </div>
         
        <div id="hobbies" className={styles.column}>
          <Card
            Titre="student job 🧑‍🔧 "
            text="I was a production worker in my holidays .IT allowed me to see automata working in a professional work environment which helped me greatly for my automate test . I also improved my ability to work in a coordinated team."
          />
        </div>

</body>

      </main>
  

      
    </div>
  );
};

export default HomePage;