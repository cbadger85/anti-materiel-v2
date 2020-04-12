import React from 'react';
import styles from './Page.module.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
  },
  exit: {
    x: '-100%',
  },
};

const Page: React.FC = ({ children }) => {
  return (
    <motion.div
      className={styles.page}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
