import React, { useState, useRef, useEffect } from 'react';
import styles from './Card.module.css';

type PanelProps = {
  titre?: string;
  img?: string[];
  txt?: string;
};

type ClickableImageProps = {
  imageSrc: string;
  altText: string;
  panelContent: PanelProps;
  targetId: string;
};

const Panel: React.FC<PanelProps> = ({ titre, img, txt }) => {
  return (
    <div>
      {titre && <h2>{titre}</h2>}
      {img && img.length > 0 && (
        <div>
          {img.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
      {txt && <p>{txt}</p>}
    </div>
  );
};

const ClickableImage: React.FC<ClickableImageProps> = ({ imageSrc, altText, panelContent, targetId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showPanel && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showPanel]);

  const handleClick = () => {
    setShowPanel(!showPanel);
    if (!showPanel) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
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
        style={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      {showPanel && <Panel {...panelContent} />}
    </>
  );
};

export { ClickableImage, Panel };