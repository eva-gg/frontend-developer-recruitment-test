import React, { useEffect, useRef, useState } from 'react';
import styles from './SelectSeason.module.scss';
import { Season } from '../../../../constants/Types';
import { useDispatch } from 'react-redux';
import { setSeason } from '../../../../reducer/season';
import { getSeasons } from '../../../../constants/Global';

const SelectSeason = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<Season | null>(null);
  const [seasons, setSeasons] = useState<Array<Season>>([]);
  const [open, setOpen] = useState<boolean>(false);
  const chevron: string = require('../../../../assets/icons/chevron.svg').default;
  const selectRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    getSeasons().then((r) => {
      if (r.data) {
        setSeasons(r.data.sort((a: Season, b: Season) => a.id < b.id ? 1 : -1));
        setSelected(r.data[0]);
        dispatch(setSeason(r.data[0]));
      } else {
        alert('Failed to get seasons');
      }
    });
  }, []);

  const topOption = () => {
    if (selectRef.current) {
      return selectRef.current.getBoundingClientRect().top + selectRef.current.getBoundingClientRect().height + 14;
    }
  };

  const options = seasons.map((d: Season, i: number) => (
    <button
      className={`${styles.option} ${d.id === selected?.id ? styles.selected : null}`}
      key={`season_${d.id}`}
      onClick={() => {
        dispatch(setSeason(d));
        setSelected(d);
        setOpen(false);
      }
      }
    >
      {i === 0 && (<span className={styles.subtitle}>Saison actuelle</span>)}
      <span>Saison&nbsp;{d.id}</span>
    </button>
  ));

  if (!seasons.length) {
    return (
      <span>...</span>
    )
  }

  return (
    <button className={styles.container} onClick={() => setOpen(!open)} ref={selectRef}>
      <span>Saison&nbsp;{selected?.id}</span>
      <img src={chevron} alt="" className={open ? styles.open : undefined} />
      {open && <div className={styles.options} style={{ top: `${topOption()}px` }}>
        {options}
      </div>}
    </button>
  )
}

export default SelectSeason;