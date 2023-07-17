import React, { useEffect, useState } from 'react';
import styles from './LastGames.module.scss';
import { useSelector } from 'react-redux';

const LastGames = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { season } = useSelector(
    (state: any) => state,
  );

  useEffect(() => {
    setLoading(true);
    if (season.id) {
      setLoading(false);
    }
  }, [season]);

  return (
    <div className={styles.container}>
      <p className={`${styles.uppercase} ${styles.bold}`}>Parties récentes</p>
      <table>
        <tr>
          <th>Jeu</th>
          <th>Joueurs</th>
          <th>Map</th>
        </tr>
        {loading ? (
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        ) : (
          <>
            <tr>
              <td>AFTER-H Battle Arena</td>
              <td>8</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>AFTER-H Battle Arena</td>
              <td>8</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>AFTER-H Battle Arena</td>
              <td>8</td>
              <td>Paris</td>
            </tr>
          </>
        )}
      </table>
      <button className={styles.seeAll}>Tout voir</button>
    </div>
  );
}

export default LastGames;