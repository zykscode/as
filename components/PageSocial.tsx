import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import React from 'react';

import { Icons } from './icons';
import styles from './PageSocial.module.css';
import stylez from './styles.module.css';

export const PageSocial = () => {
  return (
    <div
      className={`${styles.pageSocial}  items-center justify-between gap-4  `}
    >
      <a
        href={'href'}
        title={'title'}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.action} my-auto h-8 w-8 border-primaryFg  fill-primary hover:border-2 hover:border-colours-blue hover:fill-primary md:h-10 md:w-10`}
      >
        <div className={`${styles.actionBg}`}>
          <div
            className={`${styles.actionBgPane} bg-colours-blue
            `}
          />
        </div>
        <Icons.ig
          className={`${styles.actionBg} m-auto  h-5 w-5 md:h-6 md:w-6`}
        />
      </a>
      <a
        href={'href'}
        title={'title'}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.action} ${stylez.twitter}   my-auto h-8 w-8 border-colours-blue fill-colours-blue md:h-10 md:w-10`}
      >
        <div className={`${styles.actionBg}`}>
          <div
            className={`${styles.actionBgPane} bg-primary
            `}
          />
        </div>
        <FaTwitter
          className={`${styles.actionBg} m-auto h-5 w-5  md:h-6 md:w-6`}
        />
      </a>
      <a
        href={'href'}
        title={'title'}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.action} my-auto h-10  w-10 border-primaryFg  fill-primary hover:border-2 hover:border-primaryFg hover:fill-colours-red dark:hover:fill-colours-red md:h-10 md:w-10`}
      >
        <div className={`${styles.actionBg}`}>
          <div
            className={`${styles.actionBgPane} bg-primary
            `}
          />
        </div>
        <Icons.yt
          className={`${styles.actionBg} m-auto h-5 w-5 md:h-6 md:w-6`}
        />
      </a>
    </div>
  );
};
