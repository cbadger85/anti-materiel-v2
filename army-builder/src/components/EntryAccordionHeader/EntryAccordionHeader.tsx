import React, { useRef } from 'react';
import { ChevronLeft } from 'react-feather';
import { useRipple } from 'react-use-ripple';
import colors from '../../styles/colors';
import { Sectorial } from '../../types/army';
import { Details } from '../../types/unit';
import { classnames } from '../../utils/classnames';
import Image from '../Image/Image';
import StatsTable from '../StatsTable/StatsTable';
import styles from './EntryAccordionHeader.module.scss';
import { Info } from 'react-feather';
import { getTextList } from '../../utils/getTextList';
import { isKeyboardEvent } from '../../types/typeGuards';
import UnitIcon from '../UnitIcons/UnitIcons';
import { motion, AnimatePresence } from 'framer-motion';

const EntryAccordionHeader: React.FC<EntryAccordionHeaderProps> = ({
  isOpen,
  toggleAccordion,
  details,
  id,
  name,
  sectorial,
}) => {
  const accordianRef = useRef(null);
  useRipple(accordianRef);

  const handleToggle = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      isKeyboardEvent(e) &&
      (e.key === 'Enter' || e.key === 'Space' || !e.key)
    ) {
      toggleAccordion(id);
    }
  };

  return (
    <div
      className={styles.accordionHeaderContainer}
      tabIndex={0}
      ref={accordianRef}
      onClick={handleToggle}
      onKeyDown={handleToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.accordionHeader}>
        <div className={styles.logoContainer}>
          <Image width={48} height={48} imageName={details.image} />
        </div>
        <div className={styles.primaryInfo}>
          <div className={styles.unitTypeAndClassification}>
            {details.unitType} - {details.classification}
          </div>
          <h2 className={styles.name}>{name}</h2>
        </div>
        <div
          className={classnames(
            styles.accordionIcon,
            isOpen && styles['accordionIcon--active'],
          )}
        >
          <ChevronLeft size={32} color={colors.lightBlue} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={styles.infoAndStats}
          >
            <div className={styles.unitIconsContainer}>
              <UnitIcon
                cube={details.cube}
                order={details.orderType}
                impetuous={details.impetuous}
                hackable={details.hackable}
              />
            </div>
            <div className={styles.statsTableContainer}>
              <StatsTable details={details} sectorial={sectorial} />
            </div>
            <div className={styles.secondaryInfo}>
              <div className={styles.rulesContainer}>
                {!!details.equipment?.length && (
                  <div className={styles.rules}>
                    <span className={styles.ruleLabel}>Equipment: </span>
                    {getTextList(details.equipment.map(eq => eq.name))}
                  </div>
                )}
                {!!details.skills?.length && (
                  <div className={styles.rules}>
                    <span className={styles.ruleLabel}>Special Skills: </span>
                    {getTextList(details.skills.map(skill => skill.name))}
                  </div>
                )}
              </div>
              <div className={styles.infoButton}>
                <Info width={24} height={24} color={colors.teal5} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EntryAccordionHeader;

interface EntryAccordionHeaderProps {
  details: Details;
  id: string;
  name: string;
  isOpen?: boolean;
  sectorial: Sectorial;
  toggleAccordion: (entryId: string) => void;
}
