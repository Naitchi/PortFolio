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
      <h2 className={styles.title}>Recommandations</h2>
      <div className={styles.reco}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.slide}>
            <h3 className={styles.name}>TEST</h3>
          </div>
          <div className={styles.slide}>
            <h3 className={styles.name}>TESTTEST</h3>
          </div>
          <div className={styles.slide}>
            <h3 className={styles.name}>TESTTESTTEST</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
