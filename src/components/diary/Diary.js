import styles from './Diary.module.scss';
import MonthSelector from './MonthSelector';
import { useState } from 'react';
import { motion } from 'framer-motion';
import data from './diary_data';

export default function Diary() {
  const [month, setMonth] = useState(new Date(Date.now()).getMonth());
  const months = [
    'Január',
    'Február',
    'Marec',
    'Apríl',
    'Máj',
    'Jún',
    'Júl',
    'August',
    'September',
    'Október',
    'November',
    'December',
  ];

  const entries = data
    .filter((entry) => {
      const dateArr = entry.date.split('/');
      return parseInt(dateArr[1]) - 1 === month;
    })
    .map((entry, i) => (
      <motion.div
        key={i}
        className={styles['entry']}
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        exit={{ opacity: '0%' }}
      >
        <h4>{entry.date}</h4>
        <p>{entry.message}</p>
      </motion.div>
    ));

  if (entries.length === 0) {
    entries.push(
      <motion.p
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        exit={{ opacity: '0%' }}
      >
        Zatiaľ žiaden záznam.
      </motion.p>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        exit={{ opacity: '0%', transition: { duration: 0.2 } }}
      >
        <MonthSelector
          month={month}
          setMonth={setMonth}
          months={months}
        />
      </motion.div>
      <motion.main
        initial={{ translateX: '100%' }}
        animate={{ translateX: '0%' }}
        exit={{ translateX: '100%', transition: { duration: 0.2 } }}
      >
        <div className={styles['text-content']}>
          <h2>{months[month]}</h2>
          {entries}
        </div>
      </motion.main>
    </>
  );
}
