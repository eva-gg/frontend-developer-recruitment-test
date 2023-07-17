import React from 'react';
import styles from './LastGames.module.scss';

const LastGames = () => {

  return (
    <div className={styles.container}>
      <p className={`${styles.uppercase} ${styles.bold}`}>Parties récentes</p>
      <table>
        <tr>
          <th>Jeu</th>
          <th>Joueurs</th>
          <th>Map</th>
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
        <tr>
          <td>AFTER-H Battle Arena</td>
          <td>8</td>
          <td>Paris</td>
        </tr>
      </table>
      <button className={styles.seeAll}>Tout voir</button>
    </div>
  );
}

export default LastGames;