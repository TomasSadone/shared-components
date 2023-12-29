import React from 'react';
import styles from './style.module.sass';

type Props = {
  secondary: boolean;
  icon: string;
  heading: string;
  p: string;
  children: React.ReactNode;
};

export const WelcomeBanner = ({ secondary, icon, heading, p, children }: Props) => (
  <div className={`${styles.container} ${secondary && 'secondary'}`}>
    <div className={styles.content}>
      <img className={styles.img} alt="" src={icon} />
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.p}>{p}</p>
      {children}
    </div>
  </div>
);
