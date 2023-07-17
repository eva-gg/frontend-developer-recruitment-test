import React from 'react';
import styles from './HeaderMobile.module.scss';

const HeaderMobile = () => {

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <p>Découvrez nos 2 nouvelles maps ainsi que notre nouveau mode skirmish</p>
        <button>voir</button>
      </div>
    </div>
  );
}

export default HeaderMobile;