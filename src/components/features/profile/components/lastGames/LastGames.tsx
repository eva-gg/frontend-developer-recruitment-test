import React, { useEffect, useState } from 'react';
import styles from './LastGames.module.scss';
import { useSelector } from 'react-redux';
import { getGamesHistory, getGamesMode } from '../../../../../constants/Global';
import { Game, GameMode, Player } from '../../../../../constants/Types';
import moment from 'moment-timezone';

const LastGames = () => {
  const [gamesHistory, setGamesHistory] = useState<Array<Game>>([]);
  const [gamesMode, setGamesMode] = useState<Array<GameMode>>([]);
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const { user, season } = useSelector(
    (state: any) => state,
  );

  useEffect(() => {
    setGamesHistory([]);
    if (season.id) {
      getGamesHistory().then((d) => {
        if (d.data) {
          setGamesHistory(d.data)
        } else {
          alert('failed to get games history');
        }
      })
    }
  }, [season]);

  useEffect(() => {
    getGamesMode().then((d) => {
      if (d.data) {
        setGamesMode(d.data);
      } else {
        alert('Failed to get games mode');
      }
    });
  }, []);

  const rows = () => gamesHistory.slice(0, seeAll ? gamesHistory.length : 4).map((g: Game) => (
    <tr>
      <td>{gamesMode.find((gm: GameMode) => gm.id === g.data.gameId)?.name}</td>
      <td>{g.players.length}</td>
      <td>{g.data.map.replaceAll('_', ' ')}</td>
      <td>{g.players.find((p: Player) => p.userId === user.id)?.data.outcome === 'VICTORY' ? 'Victoire' : 'Défaite'}</td>
      <td>{g.createdAt && moment(g.createdAt).format('DD/MM/YYYY')}</td>
      <td>{g.createdAt && moment(g.createdAt).format('HH[h]mm')}</td>
    </tr>
  ))

  return (
    <div className={styles.container}>
      <p className={`${styles.uppercase} ${styles.bold}`}>Parties récentes</p>
      <div className={styles.tableContainer}>
        <table>
          <tr>
            <th>Jeu</th>
            <th>Joueurs</th>
            <th>Map</th>
            <th>Résultat</th>
            <th>Date</th>
            <th>Heure</th>
          </tr>
          {!gamesHistory.length ? (
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          ) : rows()}
        </table>
      </div>
      <button className={styles.seeAll} onClick={() => setSeeAll(!seeAll)}>
        {seeAll ? 'Voir moins' : 'Tout voir'}
      </button>
    </div>
  );
}

export default LastGames;