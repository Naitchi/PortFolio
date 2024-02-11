// Import React/Redux
import React from 'react';

// Style
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.buyCoffee}> </div>
      <div className={styles.socialMedia}>
        <a className={styles.btn} href="https://www.linkedin.com/in/benjamin-clairotte/">
          Linkedin
        </a>
        <a className={styles.btn} href="https://github.com/Naitchi">
          Github
        </a>
        <a className={styles.btn} href="mailto:benjaminclairottepro@gmail.com">
          Email
        </a>
        <a className={styles.btn} href="https://twitter.com/Naitchiii">
          Twitter
        </a>
      </div>
      <p className={styles.madeBy}>Site made by Benjamin Clairotte</p>
    </footer>
  );
}
