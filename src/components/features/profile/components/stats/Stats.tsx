import React, { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSeasonXp } from '../../../../../constants/Global';
import { clearSeasonXp, setUserSeasonXp } from '../../../../../reducer/user';

const Stats = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { season, user } = useSelector(
    (state: any) => state,
  );
  const progressionRef = useRef<HTMLDivElement | null>(null);
  const trophyIcon: string = require('../../../../../assets/icons/trophy.svg').default;
  const skullIcon: string = require('../../../../../assets/icons/skull.svg').default;
  const timerIcon: string = require('../../../../../assets/icons/timer.svg').default;

  useEffect(() => {
    setLoading(true);
    if (season.id) {
      setLoading(false);
    }
  }, [season]);

  useEffect(() => {
    dispatch(clearSeasonXp());
    getUserSeasonXp().then((d) => {
      if (d.data) {
        dispatch(setUserSeasonXp(d.data));
      } else {
        alert('Failed to get user season experience');
      }
    })
  }, [season]);

  useEffect(() => {
    if (progressionRef.current) {
      if (user.seasonXp.level) {
        progressionRef.current.style.width = `${user.seasonXp.level}%`;
      } else {
        progressionRef.current.style.width = '0%';
      }
    }
  }, [user, season]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <span className={styles.pseudo}>{user.displayName || '...'}</span>
          <div className={styles.level}>
            <span>Niveau :&nbsp;{!user.seasonXp.level ? '...' : `${user.seasonXp.level} / 100`}</span>
            <div className={styles.progressBar}>
              <div className={styles.progression} ref={progressionRef} />
            </div>
          </div>
        </div>
        <div className={styles.seasonBadge}>
          <span>Saison {season.id}</span>
        </div>
      </div>
      <p className={`${styles.bold} ${styles.uppercase}`} style={{ marginBottom: 6 }}>STATISTIQUES</p>
      {season.id === 2 || season.id === 3 ? (
        <p className={`${styles.italic} ${styles.gold}`}>Les sessions jouées avant le lancement de la saison 3 seront comptabilisées pour la saison 2</p>
      ) : null}
      <div className={styles.frame}>
        <span className={styles.counter}>{loading ? '...' : '210'}</span>
        <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>parties jouées</span>
      </div>
      <div className={styles.twoItems}>
        <div className={`${styles.frame} ${styles.row}`}>
          <img src={trophyIcon} alt="" />
          <div>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>Victoires</span>
            <span className={styles.counter}>{loading ? '...' : '125'}</span>
          </div>
        </div>
        <div className={`${styles.frame} ${styles.row}`}>
          <img src={skullIcon} alt="" />
          <div>
            <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>Défaites</span>
            <span className={styles.counter}>{loading ? '...' : '85'}</span>
          </div>
        </div>
      </div>
      <div className={`${styles.frame} ${styles.row}`}>
        <img src={timerIcon} alt="" />
        <div>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>TEMPS DE JEU CUMULÉ</span>
          <span className={styles.counter}>{loading ? '...' : '256'}<span>h</span></span>
        </div>
      </div>
      <div className={styles.twoItems}>
        <div className={`${styles.frame} ${styles.transparent}`}>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MAX DÉGÂTS DANS UNE PARTIE</span>
          <span className={styles.counter}>{loading ? '...' : '15233'}</span>
        </div>
        <div className={`${styles.frame} ${styles.transparent}`}>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MAX KILL STREAK</span>
          <span className={styles.counter}>{loading ? '...' : '13'}</span>
        </div>
      </div>
      <div className={styles.twoItems}>
        <div className={`${styles.frame} ${styles.transparent}`}>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>TOTAL DISTANCE PARCOURUE</span>
          <span className={styles.counter}>{loading ? '...' : '245'}<span>km</span></span>
        </div>
        <div className={`${styles.frame} ${styles.transparent}`}>
          <span className={`${styles.gold} ${styles.uppercase} ${styles.bold} ${styles.center}`}>MOY DISTANCE / PARTIE</span>
          <span className={styles.counter}>{loading ? '...' : '2.8'}<span>km</span></span>
        </div>
      </div>
    </div>
  );
}

export default Stats;