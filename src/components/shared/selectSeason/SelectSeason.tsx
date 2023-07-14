import React, { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, LegacyRef, Ref, useRef, useState } from 'react';
import styles from './SelectSeason.module.scss';
import { Season } from '../../../constants/Types';

interface Props {
  selected: Season | null,
  setSelected: Function,
  data: Array<Season>,
}

const SelectSeason = ({
  selected,
  setSelected,
  data,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const chevron: string = require('../../../assets/chevron.svg').default;
  const selectRef = useRef<HTMLButtonElement | null>(null);

  const topOption = () => {
    if (selectRef.current) {
      return selectRef.current.getBoundingClientRect().top + selectRef.current.getBoundingClientRect().height + 14;
    }
  };

  const options = data.map((d: Season, i: number) => (
    <button
      className={`${styles.option} ${d.id === selected?.id ? styles.selected : null}`}
      key={`season_${d.id}`}
      onClick={() => {
        setSelected(d);
        setOpen(false);
      }
      }
    >
      {i === 0 && (<span className={styles.subtitle}>Saison actuelle</span>)}
      <span>Season&nbsp;{d.id}</span>
    </button>
  ));

  return (
    <button className={styles.container} onClick={() => setOpen(!open)} ref={selectRef}>
      <span>Season&nbsp;{selected?.id}</span>
      <img src={chevron} alt="" className={open ? styles.open : undefined} />
      {open && <div className={styles.options} style={{ top: `${topOption()}px` }}>
        {options}
      </div>}
    </button>
  )
}

export default SelectSeason;