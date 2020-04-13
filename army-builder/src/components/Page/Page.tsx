import React from 'react';
import styles from './Page.module.scss';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LocationState {
  direction?: 'right' | 'left';
}

const Page: React.FC = ({ children }) => {
  const location = useLocation<LocationState>();

  const direction = location.state?.direction || 'left';

  return (
    <motion.div
      className={styles.page}
      initial={{ x: direction === 'left' ? '-100%' : '100%' }}
      animate={{ x: 0 }}
      exit={{ x: direction === 'left' ? '-100%' : '100%' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
