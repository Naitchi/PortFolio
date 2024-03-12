// Import React/Redux
import React from 'react';

// Import Fontawesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
          image="AncienCV.png"
          url="https://mon-cv-en-ligne.vercel.app/"
          desc="Mon ancien CV fait pour montrer mes compétences de coder. Le site illustre également ma progression au niveau design."
        />
        <SiteCard
          image="quest-eft.png"
          url="https://quest-eft.com"
          desc="Site pour les joueurs d'Escape From Tarkov, vous permet de connaître la location et les détails de vos quêtes sur la carte pour mieux vous y retrouvez."
        />
        <SiteCard
          image="formademia.png"
          url="https://www.formademia.fr"
          desc="Site de vente de formations, permettant aux utilisateurs de Mes-Allocs de se former et ainsi revenir dans la vie active. Le site héberge aussi un Back-office développé par mes soins."
        />
        <SiteCard
          image="SportSee.png"
          url="https://projet-14-wealth-health-1zqd.vercel.app/12"
          desc="Projet de ma formation développeur web, j'ai créé une page qui affiche les statistiques sportive d'une personne en les stylisant selon la maquette."
        />
        <SiteCard
          image="butterflychat.png"
          url="https://butterfly-chat.vercel.app/"
          desc="Projet personnel pour apprendre les websockets, j'ai créé un chat qui permet de communiquer avec plusieurs autres utilisateurs en temps réel."
        />
      </div>
      <a className={styles.github} href="https://github.com/Naitchi?tab=repositories">
        Consulter tous mes projets sur GitHub.
        <FontAwesomeIcon className={styles.icon} icon={faArrowRight} size="xl" />
      </a>
    </div>
  );
}
