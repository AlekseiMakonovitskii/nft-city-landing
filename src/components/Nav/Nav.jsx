import React, { useEffect } from 'react';
import styles from './Nav.module.css';
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaYoutube,
} from 'react-icons/fa';
import Button from '../Button/Button';

const Nav = ({ isOpen, screen }) => {
  return (
    <nav className={`${styles[screen]} ${isOpen && styles.navOpen}`}>
      <ul className={styles.anchors}>
        <li>
          <a href="">Utility</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <div className={styles.links}>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaDiscord />
        </a>
        <a href="">
          <FaTelegramPlane />
        </a>
        <a href="">
          <FaYoutube />
        </a>
      </div>
      <Button />
    </nav>
  );
};

export default Nav;
