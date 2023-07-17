import React, { useEffect, useRef } from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  const progressionRef = useRef<HTMLDivElement | null>(null);
  const trophyIcon: string = require('../../../assets/icons/trophy.svg').default;
  const skullIcon: string = require('../../../assets/icons/skull.svg').default;
  const timerIcon: string = require('../../../assets/icons/timer.svg').default;

  useEffect(() => {
    if (progressionRef.current) {
      progressionRef.current.style.width = '20%';
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerMobile}>
        <div className={styles.banner}>
          <p>Découvrez nos 2 nouvelles maps ainsi que notre nouveau mode skirmish</p>
          <button>voir</button>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.top}>
          <div className={styles.profile}>
            <span className={styles.pseudo}>Balzou</span>
            <div className={styles.level}>
              <span>Niveau : 20 / 100</span>
              <div className={styles.progressBar}>
                <div className={styles.progression} ref={progressionRef} />
              </div>
            </div>
          </div>
          <div className={styles.seasonBadge}>
            <span>Saison 3</span>
          </div>
        </div>
        <p className={`${styles.bold} ${styles.uppercase}`} style={{ marginBottom: 6 }}>STATISTIQUES</p>
        <p className={`${styles.italic} ${styles.gold}`}>Les sessions jouées avant le lancement de la saison 3 seront comptabilisées pour la saison 2</p>
        <div className={styles.frame}>
          <span className={styles.counter}>210</span>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>parties jouées</span>
        </div>
        <div className={styles.twoItems}>
          <div className={`${styles.frame} ${styles.row}`}>
            <img src={trophyIcon} alt="" />
            <div>
              <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>Victoires</span>
              <span className={styles.counter}>125</span>
            </div>
          </div>
          <div className={`${styles.frame} ${styles.row}`}>
            <img src={skullIcon} alt="" />
            <div>
              <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>Défaites</span>
              <span className={styles.counter}>85</span>
            </div>
          </div>
        </div>
        <div className={`${styles.frame} ${styles.row}`}>
          <img src={timerIcon} alt="" />
          <div>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>TEMPS DE JEU CUMULÉ</span>
            <span className={styles.counter}>256<span>h</span></span>
          </div>
        </div>
        <div className={styles.twoItems}>
          <div className={`${styles.frame} ${styles.transparent}`}>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MAX DÉGÂTS DANS UNE PARTIE</span>
            <span className={styles.counter}>15233</span>
          </div>
          <div className={`${styles.frame} ${styles.transparent}`}>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MAX KILL STREAK</span>
            <span className={styles.counter}>13</span>
          </div>
        </div>
        <div className={styles.twoItems}>
          <div className={`${styles.frame} ${styles.transparent}`}>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>TOTAL DISTANCE PARCOURUE</span>
            <span className={styles.counter}>245<span>km</span></span>
          </div>
          <div className={`${styles.frame} ${styles.transparent}`}>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MOY DISTANCE / PARTIE</span>
            <span className={styles.counter}>2.8<span>km</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;