import React from "react";
import styles from './Card.module.css';
import ImageDownloader from './ImageDownloade'
import cv from './image/cv.jpg'

const Contact: React.FC = () => {
return (

<div>
<header className={styles.imageContainer}>
<ImageDownloader imagePath="/image/cv.jpg" downloadName="cv.jpg" />
          <img src={cv} alt="CV" className={styles.cvImage} />
        
</header>
  


  <footer className={styles.footer}>
    <h1> Contact me</h1>
        <div >
          <p>Email: Bilaldrabo35@gmail.com</p>
          <p> student account  : la218086@student.helha.be</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/bilal-drabo-a9b5b7222/" target="_blank" rel="noopener noreferrer">Bilal Drabo</a></p>
          <p>phone: 0499251365</p>
        </div>
      </footer>
</div>

);

      };
      export default Contact;