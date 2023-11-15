import React, { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import Hamburger from 'hamburger-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logo" />

      <nav className={`${styles.nav} ${isOpen && styles.navOpen}`}>
        <ul className={styles.anchors}>
          <li>Utility</li>
          <li>About</li>
          <li>Team</li>
          <li>FAQ</li>
        </ul>
        <div className={styles.links}></div>
        <button>Get your crypto hand 'should be another component'</button>
      </nav>

   

      <Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" />
    </header>
  );
};

export default Header;
