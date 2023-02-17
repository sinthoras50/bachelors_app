import styles from './Index.module.scss';
import { motion } from 'framer-motion';

export default function Index() {
  return (
      <motion.main 
        className={styles['intro']}
        initial={{translateX: '-100%'}}
        animate={{translateX: '0%'}}
        exit={{translateX: '-100%', transition: {duration: 0.2}}}
      >
        <div className={styles['grid']}>
          <div className={styles['title']}>Téma:</div>
          <div className={styles['title-field']}>Mobilná aplikácia na spracovanie šekov/poštových poukážok pomocou OCR technológie</div>
          <div className={styles['author']}>Autor:</div>
          <div className={styles['author-field']}>Marek Lichvár</div>
          <div className={styles['adviser']}>Školitel:</div>
          <div className={styles['adviserField']}>RNDr. Zuzana Berger Haladová, PhD</div>
          <div className={styles['contact']}>Kontakt:</div>
          <div className={styles['contactField']}>lichvar4@uniba.sk</div>
        </div>
      </motion.main>
  )
}