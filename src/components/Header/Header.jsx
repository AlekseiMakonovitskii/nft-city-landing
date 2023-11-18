import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import Hamburger from 'hamburger-react';
import Button from '../Button/Button';
import Nav from '../Nav/Nav';
import { useWindowSize } from '@uidotdev/usehooks';
import Modal from '../Modal/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 800) {
      setIsOpen(false);
    }
  }, [size]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logoImg} alt="Logo" />

          <Nav isOpen={isOpen} screen={'desktop'} />

          <div className={styles.burgerBtn}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" />
          </div>
        </div>
      </header>

      <Nav isOpen={isOpen} screen={'mobile'} />

      {isOpen && <Modal onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
