import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import SelectSeason from './selectSeason/SelectSeason';
import { Route } from '../../../constants/Types';
import { useSelector } from 'react-redux';

interface Props {
  selected: number,
  routes: Array<Route>,
}

const Navigation = ({
  selected,
  routes,
}: Props) => {
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

  const mappedRoutes: () => JSX.Element[] = () => routes.map((r: Route) => (
    <button className={`${styles.route} ${selected === r.id ? styles.selected : ''}`} key={`route_${r.id}`}>
      <span>{r.title}</span>
    </button>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.profile}>
          <div className={styles.level}>
            <span>{loading ? '...' : '20'}</span>
          </div>
          <span>Balzou</span>
        </div>
        <div className={styles.selectContainer}>
          <SelectSeason />
        </div>
      </div>
      <div className={styles.row}>
        {mappedRoutes()}
      </div>
    </div>
  )
}

export default Navigation;