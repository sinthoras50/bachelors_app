import styles from './App.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Index from './components/index/Index';
import Diary from './components/diary/Diary';
import Annotation from './components/annotation/Annotation';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className={styles['app']}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path='/'
            element={<Index />}
          />
          <Route 
            path='/annotation'
            element={<Annotation />}
          />

          <Route 
            path='/diary'
            element={<Diary />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
