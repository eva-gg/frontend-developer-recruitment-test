import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerMobile}>
        <div className={styles.banner}>
          <p>Découvrez nos 2 nouvelles maps ainsi que notre nouveau mode skirmish</p>
          <button>voir</button>
        </div>
      </div>
    </div>
  )
}

export default Profile;