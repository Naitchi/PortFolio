// Import React/Redux
import Head from 'next/head';
import React from 'react';

// Components
import Header from '@/components/Header/Header';
import Opening from '@/components/Opening/Opening';
import Portfolio from '@/components/Portfolio/Portfolio';
import Recommandations from '@/components/Recommandations/Recommandations';
import Footer from '@/components/Footer/Footer';

// Styles
import styles from '@/styles/index.module.scss';

// TODO mettre une selection de language

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Benjamin Clairotte | Développeur d&apos;Applications Web FullStack</title>
        <meta
          name="description"
          content="J'aime codé et voilà ce que j'ai codé; Bienvenue sur mon PortFolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" type="image/ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Opening />
        <Portfolio />
        <Recommandations />
        <Footer />
      </div>
    </React.Fragment>
  );
}
