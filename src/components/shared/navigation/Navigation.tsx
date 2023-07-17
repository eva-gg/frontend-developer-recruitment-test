import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import SelectSeason from './selectSeason/SelectSeason';
import { Route, User } from '../../../constants/Types';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../constants/Global';
import { setUser } from '../../../reducer/user';

interface Props {
  selected: number,
  routes: Array<Route>,
}

const Navigation = ({
  selected,
  routes,
}: Props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state: any) => state,
  );

  useEffect(() => {
    getUser().then((u) => {
      if (u.data) {
        const user: User = u.data;
        dispatch(setUser(user));
      } else {
        alert('failed to get user infos');
      }
    })
  })

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
            <span>{user.seasonXp.level || '...'}</span>
          </div>
          <span>{user.displayName || '...'}</span>
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