import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import Select from '../selectSeason/SelectSeason';
import { Route, Season } from '../../../constants/Types';
import { getSeasons } from '../../../constants/Global';

interface Props {
  selected: number,
  routes: Array<Route>,
}

const Navigation = ({
  selected,
  routes,
}: Props) => {
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [seasons, setSeasons] = useState<Array<Season>>([]);

  const mappedRoutes: () => JSX.Element[] = () => routes.map((r: Route) => (
    <button className={`${styles.route} ${selected === r.id ? styles.selected : ''}`} key={`route_${r.id}`}>
      <span>{r.title}</span>
    </button>
  ));

  useEffect(() => {
    getSeasons().then((r) => {
      if (r.data) {
        setSeasons(r.data.sort((a: Season, b: Season) => a.id < b.id ? 1 : -1));
      } else {
        alert('Failed to get seasons');
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.profile}>
          <div className={styles.level}>
            <span>20</span>
          </div>
          <span>Balzou</span>
        </div>
        <div className={styles.selectContainer}>
          {seasons.length ? (
            <Select selected={selectedSeason || seasons[0]} data={seasons} setSelected={setSelectedSeason} />
          ) : (
            <span>...</span>
          )}
        </div>
      </div>
      <div className={styles.row}>
        {mappedRoutes()}
      </div>
    </div>
  )
}

export default Navigation;