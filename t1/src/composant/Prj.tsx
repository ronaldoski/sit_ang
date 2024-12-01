import React from 'react';
import { ClickableImage, Panel } from './Click';
import CSvg from './image/camera.svg';
import Card from './Card';
import styles from './Card.module.css';
import Dbi from './image/Debit2.svg';

const Prj: React.FC = () => {
  const panelContent = {
    titre: "Appareil Photo",
    img: [CSvg, "./image/autre-image.jpg"],
    txt: "Ceci est un appareil photo numérique haute résolution. Cliquez pour plus d'informations."
  };

  return (
    <div className={styles.column}>
      <header>
        <Card Titre='skibidi' text='toilet'/>
      </header>
      
      <main className={styles.photo}>  
        <ClickableImage 
          imageSrc={CSvg}
          altText="Icône d'appareil photo cliquable"
          panelContent={panelContent}
          targetId="panel-target-1"
        />
        <ClickableImage 
          imageSrc={Dbi}
          altText="Icône de débit cliquable"
          panelContent={{
            titre: "Débit",
            img: [Dbi],
            txt: "Information sur le débit."
          }}
          targetId="panel-target-2"
        />
      </main>
      <div className="contact-info">
        <h2>Informations de contact</h2>
        <p>Email: contact@example.com</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
      </div>
      <p>N'hésitez pas à nous contacter pour plus d'informations.</p>
    </div>
  );
}

export default Prj;