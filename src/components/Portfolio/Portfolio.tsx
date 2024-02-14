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
          desc="Mon ancien CV fait pour montré mes compétences. Le design laisse un peu à désirer sur certaines parties mais je suis fier de ce site."
        />
        <SiteCard
          image="quest-eft.png"
          url="https://quest-eft.com"
          desc="Site pour les joueurs d'Escape From Tarkov, vous permet de connaitre la location et les détails de vos quêtes sur la carte pour mieux vous y retrouvez."
        />
        <SiteCard
          image="formademia.png"
          url="https://www.formademia.fr"
          desc="Site de formation, j'ai développer la homepage, la page des mentions-légals, la page &quot;Qui sommes-nous?&quot; mais aussi le BackOffice qui lui n'ai pas disponible au public."
        />
      </div>
      <p className={styles.thisOneToo}>Et ce site PortFolio évidemment.</p>
      <a className={styles.github} href="https://github.com/Naitchi?tab=repositories">
        En voir plus sur mon Github
        <FontAwesomeIcon className={styles.icon} icon={faArrowRight} size="xl" />
      </a>
    </div>
  );
}
