import styles from './Diary.module.scss';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { useState } from 'react';
import data from './diary_data.js';
import './Calendar.scss';


export default function Diary() {
  const [value, setValue] = useState(new Date());
  const [view, setView] = useState('month');
  const [month, setMonth] = useState(new Date(Date.now()).getMonth())

  function tileDisabled({ date, view }) {
    const dateString = date.toLocaleDateString('en-GB');
    return view === 'month' ? !data.some(entry => entry.date === dateString) : false;
  }

  function changeValue(value) {
    setValue(value);
  }

  function changeView({ activeStartDate, view }) {
    setView(view);

    if (view === 'month') {
      setMonth(activeStartDate.getMonth());
    }
  }

  const entries = data
    .filter(entry => { 
      const dateArr = entry.date.split('/');
      return parseInt(dateArr[1])-1 === month
    })
    .map((entry, i) => (
      <div key={i} className={styles['entry']}>
        <h4>{entry.date}</h4>
        <p>{entry.message}</p>
      </div>
    ))

  return (
    <motion.main
      className={styles['diary']}
      initial={{ translateX: '100%' }}
      animate={{ translateX: '0%' }}
      exit={{ translateX: '100%', transition: { duration: 0.2 } }}
    >
      <Calendar
        minDate={new Date(2023, 1, 16)}
        maxDate={new Date(2023, 11, 31)}
        value={value}
        view={view}
        minDetail='year'
        onChange={changeValue}
        onViewChange={changeView}
        tileDisabled={tileDisabled}
        prev2Label=''
        next2Label=''
      />

      <section className='diary-entries'>
        {entries}
      </section>
    </motion.main>
  );
}
