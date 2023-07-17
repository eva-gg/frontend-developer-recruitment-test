import React from 'react';
import styles from './Profile.module.scss';
import HeaderMobile from './components/headerMobile/HeaderMobile';
import Stats from './components/stats/Stats';
import LastGames from './components/lastGames/LastGames';

const Profile = () => {

  return (
    <div className={styles.container}>
      <HeaderMobile />
      <Stats />
      <LastGames />
    </div>
  )
}

export default Profile;