// Import React/Redux
import React from 'react';

// Import Component
import SiteCard from '../SiteCard/SiteCard';

// Style
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.topSide}>
        <h2 className={styles.title}>Mes Sites</h2>
      </div>
      <div className={styles.botSide}>
        <SiteCard
          image="E1rVcDRVcAAeTVb.jpg"
          url="https://benjaminclairotte.fr"
          desc="Mon ancien CV fait pour montré mes compétences. Le design laisse un peu à désirer sur certaines parties mais je suis fier de ce site."
        />
      </div>
    </div>
  );
}
