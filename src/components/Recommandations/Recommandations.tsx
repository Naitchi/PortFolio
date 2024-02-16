// Import React/Redux
import React from 'react';
import Slider from 'react-slick';

// Style
import styles from './Recommandations.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import Fontawesome
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
      <h2 className={styles.title}>Recommandé par&nbsp;:</h2>
      <div className={styles.reco}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.slide}>
            <img className={styles.img} src="/assets/ManuPP.jpg" alt="Photo de Manuel" />
            <h3 className={styles.name}>Manuel Trambert</h3>
            <p className={styles.work}>Ancien Lead Développeur ches Mes-Allocs</p>
            <a
              href="https://www.linkedin.com/in/manuel-trambert-731312a9/"
              className={styles.linkedin}
            >
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="xl" />
              Profil LinkedIn
            </a>
          </div>
          <div className={styles.slide}>
            <img
              className={styles.img}
              src="/assets/JoffreyPP.jpg"
              alt="Photo représentant Joffrey"
            />
            <h3 className={styles.name}>Joffrey Hernandez</h3>
            <p className={styles.work}>Développeur Web et Mentor chez OpenClassrooms</p>
            <a href="https://www.linkedin.com/in/joffreyhernandez/" className={styles.linkedin}>
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="xl" />
              Profil LinkedIn
            </a>
          </div>
          <div className={styles.slide}>
            <img className={styles.img} src="/assets/PwccaPP.jpg" alt="Photo de Pwcca" />
            <h3 className={styles.name}>Dylan &quot;Pwcca&quot; Bouvier</h3>
            <p className={styles.work}>Directeur de Production chez Solary</p>
            <a
              href="https://www.linkedin.com/in/dylan-bouvier-9956a219b/"
              className={styles.linkedin}
            >
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="xl" />
              Profil LinkedIn
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
