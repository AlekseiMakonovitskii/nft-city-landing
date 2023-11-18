import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';
import gif from '../../assets/gif.gif';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className="purple-text">Crypto Hands NFT Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Button />
      </div>
      <div className={styles.heroGif}>
        <img src={gif} alt="" />
      </div>
    </section>
  );
};

export default Hero;
