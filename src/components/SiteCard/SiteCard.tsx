// Import React/Redux
import React, { useState } from 'react';
import Link from 'next/link';

// Style
import styles from './SiteCard.module.scss';

type SiteCardProps = {
  image: string;
  url: string;
  desc: string;
};

const SiteCard: React.FC<SiteCardProps> = ({ image, url, desc }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.siteCard}
      style={{ backgroundImage: `url(/assets/${image})` }}
    >
      <div className={`${hover ? styles.hover : ''} ${styles.content}`}>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.btn} target="_blank" href={url}>
          Visiter le site
        </Link>
      </div>
    </button>
  );
};

export default SiteCard;
