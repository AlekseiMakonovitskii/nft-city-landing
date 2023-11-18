import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClick }) => {
  return <div className={styles.modal} onClick={onClick}></div>;
};

export default Modal;
