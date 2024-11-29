import React from 'react';
import Card from './Card';
import Img from './Img'; 
import CSvg from './image/camera.svg';
import ClickableImage from './Click';

const Contact: React.FC = () => {
  // Contenu du panel pour l'image cliquable
  const panelContent = {
    titre: "Appareil Photo",
    img: [CSvg, "./image/autre-image.jpg"], // Assurez-vous que ces chemins sont corrects
    txt: "Ceci est un appareil photo numérique haute résolution."
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      
      <ClickableImage 
        imageSrc={CSvg}
        altText="Icône d'appareil photo cliquable"
        panelContent={panelContent}
      />

      

      <Img src={CSvg} alt="Icône d'appareil photo statique" />

      <p>N'hésitez pas à nous contacter pour plus d'informations.</p>
    </div>
  );
}

export default Contact;