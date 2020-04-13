import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Sectorial } from '../../types/army';
import SectorialListItem from '../ArmyListAccordianItem/ArmyListAccordionItem';
import Divider from '../Divider/Divider';
import styles from './ArmyListAccordionContents.module.scss';

const ArmyListAccordionContents: React.FC<ArmyListAccordionContentsProps> = ({
  isOpen,
  sectorials,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.container} hidden={!isOpen}>
          <motion.div
            className={styles.contents}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {sectorials.map((sectorial, i) => (
              <React.Fragment key={sectorial.name}>
                <SectorialListItem sectorial={sectorial} autoFocus={!i} />
                {i !== sectorials.length - 1 && <Divider color="gray" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ArmyListAccordionContents;

interface ArmyListAccordionContentsProps {
  isOpen?: boolean;
  sectorials: {
    name: Sectorial;
    image: string;
  }[];
}
