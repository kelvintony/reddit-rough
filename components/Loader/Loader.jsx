import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.lds_default}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
