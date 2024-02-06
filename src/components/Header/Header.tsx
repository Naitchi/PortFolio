// Import React/Redux
import React, { useEffect, useState } from 'react';

// Style
import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 57) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.main} ${scrolled ? styles.scrolled : ''}`}>
      <Link href={'/'}>
        <img
          src="/assets/logo.png"
          className={styles.logo}
          alt="Logo de mon site Benjamin Clairotte Portfolio"
        />
      </Link>
      <a className={styles.contact} href="mailto:benjaminclairottepro@gmail.com">
        Me Contacter
      </a>
    </header>
  );
}
