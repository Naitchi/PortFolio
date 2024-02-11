// Import React/Redux
import React from 'react';
import Slider from 'react-slick';

// Style
import styles from './Recommandations.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Recommandations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.bg}>
      <h2 className={styles.title}>Recommandé par :</h2>
      <div className={styles.reco}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.slide}>
            <img className={styles.img} src="/assets/ManuPP.webp" alt="Photo de Manuel" />
            <h3 className={styles.name}>Manuel Trambert</h3>
            <p className={styles.work}>Ancien Lead Développeur ches Mes-Allocs</p>
          </div>
          <div className={styles.slide}>
            <img
              className={styles.img}
              src="/assets/JoffreyPP.webp"
              alt="Photo représentant Joffrey"
            />
            <h3 className={styles.name}>Joffrey Hernandez</h3>
            <p className={styles.work}>Développeur Web et Mentor chez OpenClassrooms</p>
          </div>
          <div className={styles.slide}>
            <img className={styles.img} src="/assets/PwccaPP.PNG" alt="Photo de Pwcca" />
            <h3 className={styles.name}>Dylan &quot;Pwcca&quot; Bouvier</h3>
            <p className={styles.work}>Directeur de Production chez Solary</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
