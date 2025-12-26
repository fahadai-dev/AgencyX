import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ultramodern <span>React</span> The solution is now at your fingerprints</h1>
        <p className={styles.subtitle}>I create the best and fastest website for your business</p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Check out my work</button>
          <button className={styles.secondaryBtn}>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;