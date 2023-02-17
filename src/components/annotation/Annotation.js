import styles from './Annotation.module.scss';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Annotation() {
  const { state } = useLocation();
  console.log(state);

  return (
      <motion.main 
        className={styles['annotation']}
        initial={{translateX: state.prevPath === '/' ? '100%' : '-100%'}}
        animate={{translateX: '0%'}}
        exit={{opacity: 0, transition: {duration: 0.2}}}
      >
        <div className={styles['text-content']}>
          <p>
            Cieľom práce bude vytvoriť aplikáciu pre Android OS na vytváranie pay by square QR kódov, alebo Payme linku, ktorý umožní používateľovi priamo zaplatiť bez nutnosti 
            prepisu údajov do internet bankingu.
          </p>
          <p>
            V prvom kroku pôjde o načítanie fakturačných údajov pomocou kamery a následovné spracovanie pomocou OCR. V druhom kroku bude nutné vykonať kontrolu správnosti fakturačných
            údajov - IBAN, korektná suma, dátum, etc.
          </p>
          <p>
            Nakoniec aplikácia vygeneruje QR kód, ktorý vedia spracovať bankové aplikacie alebo Payme link. Aplikácia bude obsahovať aj editor vzorov, kde bude môcť používateľ vytvoriť
            aj iný vzor pre rozpoznávanie ako tradičný šek.
          </p>
        </div>

      </motion.main>
  )
}