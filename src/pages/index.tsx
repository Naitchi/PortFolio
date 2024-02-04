// Import React/Redux
import Head from 'next/head';
import React from 'react';

// Components
import Header from '@/components/Header/Header';

// Styles
import styles from '@/styles/index.module.scss';

// TODO mettre une selection de language

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Benjamin Clairotte</title>
        <meta
          name="description"
          content="J'aime codé et voilà ce que j'ai codé; Bienvenue sur mon PortFolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className={styles.main}>
        <Header />
      </div>
    </React.Fragment>
  );
}
