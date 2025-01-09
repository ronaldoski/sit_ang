import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  Titre: string;
  text?: string;
};

const Card: React.FC<CardProps> = ({ Titre, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentContainer}>
        <h2 className={styles.Tit}>{Titre}</h2>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
};

export default Card;
