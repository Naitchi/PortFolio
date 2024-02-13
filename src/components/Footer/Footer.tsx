// Import React/Redux
import React from 'react';

// Style
import styles from './Footer.module.scss';

// Import Fontawesome
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.buyCoffee}> </div>
      <div className={styles.socialMedia}>
        <a className={styles.btn} href="https://www.linkedin.com/in/benjamin-clairotte/">
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="xl" />
          Linkedin
        </a>
        <a className={styles.btn} href="https://github.com/Naitchi">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} size="xl" />
          Github
        </a>
        <a className={styles.btn} href="mailto:benjaminclairottepro@gmail.com">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="xl" />
          Email
        </a>
        <a className={styles.btn} href="https://twitter.com/Naitchiii">
          <FontAwesomeIcon className={styles.icon} icon={faXTwitter} size="xl" />
          Twitter
        </a>
      </div>
      <p className={styles.madeBy}>Site made by Benjamin Clairotte</p>
    </footer>
  );
}
