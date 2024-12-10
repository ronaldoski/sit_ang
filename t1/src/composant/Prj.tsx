import React from 'react';
import { ClickableImage } from './Click';
import CSvg from './image/camera.svg';
import Dbi from './image/Debit2.svg';
import styles from './Card.module.css';
import Card from './Card';
function Prj() {
  return (
    <div className={styles.column}>
      <header>
        <h1>Projet</h1>
      </header>

      <main className={styles.clickableImageContainer}>
        <ClickableImage
          imageSrc={CSvg}
          altText="Icône d'appareil photo cliquable"
          
          targetId="panel-target-1"
        />
        <ClickableImage
          imageSrc={Dbi}
          altText="Icône d'appareil photo cliquable"
          targetId="panel-target-2"
        />
      </main>

      <div id="panel-target-1" className={styles.target}>
        <Card
Titre=" yatta"
        text="ooooooooooooooo "  
        />
        <h2>Section Appareil Photo</h2>
      </div>
      <div id="panel-target-2" className={styles.target}>
        <h2>Section Débit</h2>
      </div>
    </div>
  );
}

export default Prj;
