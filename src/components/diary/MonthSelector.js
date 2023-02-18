import styles from './MonthSelector.module.scss';
import { motion, useCycle } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const toolbar_h = 30;
const min_width = 560;

const variants = {
  none: {
    opacity: 0,
    clipPath: `polygon(50% 0, 50% 0, 50% 0, 50% 0)`,
    transition: {
      duration: 0.01,
    },
  },
  open: (dimens) => ({
    clipPath: `polygon(${dimens.x}px 0px, ${dimens.x + dimens.width}px 0px, ${
      dimens.x + dimens.width - toolbar_h
    }px ${dimens.height}px, ${dimens.x + toolbar_h}px ${dimens.height}px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  }),

  closed: (dimens) => ({
    clipPath: `polygon(${dimens.x}px 0px, ${dimens.x + dimens.width}px 0px, ${
      dimens.x + dimens.width - toolbar_h
    }px ${dimens.height}px, ${dimens.x + toolbar_h}px ${dimens.height}px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  }),
};

export default function MonthSelector({ month, setMonth, months }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [boundingRect, setBoundingRect] = useState({
    x: 1000,
    y: 1000,
    width: 1000,
    height: 1000,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleClickLeft() {
    let idx = month;
    idx = idx - 1 < 0 ? months.length - 1 : idx - 1;

    setMonth(idx);
  }

  function handleClickRight() {
    let idx = month;
    idx = idx + 1 >= months.length ? 0 : idx + 1;

    setMonth(idx);
  }

  function handleClickCenter(event, idx) {
    if (isOpen) {
      setMonth(idx);
    }
    if (window.innerWidth > min_width) {
      toggleOpen();
    }
  }

  useEffect(() => {
    // console.log(windowWidth)
    if (windowWidth <= min_width) {
      console.log('should close ')
      toggleOpen(0);
    }
  }, [windowWidth])

  useEffect(() => {
    setBoundingRect(containerRef.current.getBoundingClientRect());
  }, [isOpen]);

  useEffect(() => {
    setBoundingRect(containerRef.current.getBoundingClientRect());
    setWindowWidth(window.innerWidth);

    const listener = () => {
      setBoundingRect(containerRef.current.getBoundingClientRect());
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [containerRef]);

  return (
    <motion.div
      className={styles['month-selector']}
      custom={boundingRect}
      initial={'none'}
      exit={{ opacity: 0 }}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <div
        ref={containerRef}
        className={styles['controls']}
      >
        {/* <div className={styles['background']}></div> */}
        <span>
          <i
            className={`${styles['arrows']} fa-solid fa-angles-left`}
            onClick={handleClickLeft}
          ></i>
        </span>

        <ul className={styles['months']}>
          {isOpen ? (
            months.map((m, i) => (
              <motion.li
                key={`month-${i}`}
                className={month === i ? styles['selected'] : ''}
                onClick={e => handleClickCenter(e, i)}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                style={ { cursor: windowWidth > min_width ? 'pointer' : 'auto' }}
              >
                {m.slice(0, 3)}
              </motion.li>
            ))
          ) : (
            <motion.li
              onClick={e => handleClickCenter(e, month)}
              whileHover={windowWidth > min_width && { scale: 1.2, transition: { duration: 0.3 } }}
              style={ { cursor: windowWidth > min_width ? 'pointer' : 'auto' }}
            >
              {months[month].slice(0, 3)}
            </motion.li>
          )}
        </ul>

        <span>
          <i
            className={`${styles['arrows']} fa-solid fa-angles-right`}
            onClick={handleClickRight}
          ></i>
        </span>
      </div>
    </motion.div>
  );
}
