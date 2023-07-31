// SocialMedia.tsx

import React from 'react';
import styles from './socialmedia.module.scss';

interface SocialMediaProps {
  links: {
    platform: string;
    url: string;
  }[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  return (
    <div className={styles['social-media']}>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <img
            className={`${styles['social-icon']} ${styles[link.platform]}`}
            src={`https://img.icons8.com/material-outlined/24/ffffff/${link.platform}.png`}
            alt={`${link.platform} Icon`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
