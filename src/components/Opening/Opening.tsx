// Import React/Redux
import React from 'react';

// Style
import styles from './Opening.module.scss';

export default function Opening() {
  return (
    <div className={styles.opening}>
      <h1 className={styles.title}>Développeur d&apos;Applications Web</h1>
      <p className={styles.desc}>Je design et crée des applications que j&apos;aime.</p>
      <img className={styles.img} src="/assets/moi.png" alt="Photo de Benjamin Clairotte" />
    </div>
  );
}
