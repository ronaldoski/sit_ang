import React, { useState } from 'react';

type ClickableImageProps = {
  imageSrc: string;
  altText: string;
  panelContent: PanelProps;
}

type PanelProps = {
  titre?: string;
  img?: string[];
  txt?: string;
}

// Composant Panel
const Panel: React.FC<PanelProps> = ({ titre, img, txt }) => {
  return (
    <div className="panel">
      {titre && <h2>{titre}</h2>}
      {img && img.length > 0 && (
        <div className="panel-images">
          {img.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`${titre || 'Image'} ${index + 1}`} />
          ))}
        </div>
      )}
      {txt && <p>{txt}</p>}
    </div>
  );
};

// Composant ClickableImage
const ClickableImage: React.FC<ClickableImageProps> = ({ imageSrc, altText, panelContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleClick = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="clickable-image-container">
      <div 
        className="clickable-image"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <img src={imageSrc} alt={altText} style={{ width: '100%', height: 'auto' }} />
      </div>
      {showPanel && <Panel {...panelContent} />}
    </div>
  );
};

export default ClickableImage;