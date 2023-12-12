import styles from './style.module.sass';

const WelcomeBanner = ({ secondary, icon, heading, p, children }) => (
  <div className={`${styles.container} ${secondary && 'secondary'}`}>
    <div className={styles.content}>
      <img className={styles.img} alt="" src={icon} />
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.p}>{p}</p>
      {children}
    </div>
  </div>
);

export default WelcomeBanner;
