import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.css';

type PanelProps = {
  titre?: string;
  img?: string[];
  txt?: string;
};

type ClickableImageProps = {
  imageSrc: string;
  altText: string;
  targetId: string;
};

const Panel: React.FC<PanelProps> = ({ titre, img, txt }) => {
  return (
    <div>
      {titre && <h2>{titre}</h2>}
      {img && img.length > 0 && (
        <div>
          {img.map((imgSrc, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img key={index} src={imgSrc} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
      {txt && <p>{txt}</p>}
    </div>
  );
};

const ClickableImage: React.FC<ClickableImageProps> = ({ imageSrc, altText,  targetId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <img
        src={imageSrc}
        alt={altText}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.clickableImage}
        style={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
    </>
  );
};

export { ClickableImage, Panel };
