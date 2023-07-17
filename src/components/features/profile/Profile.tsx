import React from 'react';
import styles from './Profile.module.scss';
import HeaderMobile from './components/headerMobile/HeaderMobile';
import Stats from './components/stats/Stats';

const Profile = () => {

  return (
    <div className={styles.container}>
      <HeaderMobile />
      <Stats />
    </div>
  )
}

export default Profile;