import styles from './MonthSelector.module.scss';

export default function MonthSelector({ month, setMonth, months }) {


  function handleClickLeft() {
    let idx = month;
    idx = idx-1 < 0 ? months.length-1 : idx-1;

    setMonth(idx);
  }

  function handleClickRight() {
    let idx = month;
    idx = idx+1 >= months.length ? 0 : idx+1;
    
    setMonth(idx);
  }

  return (
    <div className={styles['month-selector']}>
      <div className={styles['controls']}>
        <div className={styles['background']}></div>
        <span>
          <i
            className={`${styles['arrows']} fa-solid fa-angles-left`}
            onClick={handleClickLeft}
          ></i>
        </span>
        <span>{months[month].slice(0, 3)}</span>
        <span>
          <i
            className={`${styles['arrows']} fa-solid fa-angles-right`}
            onClick={handleClickRight}
          ></i>
        </span>
      </div>
    </div>
  );
}
