import React, { useRef } from 'react';
import { ChevronLeft } from 'react-feather';
import { useRipple } from 'react-use-ripple';
import colors from '../../styles/colors';
import { classnames } from '../../utils/classnames';
import Image from '../Image/Image';
import styles from './EntryAccordionHeader.module.scss';
import { Entry } from '../../types/entry';
import { Sectorial } from '../../types/army';
import StatsTable from '../StatsTable/StatsTable';

const isKeyboardEvent = <T,>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    console.log(e.type);
    return true;
  }

  return true;
};

const EntryAccordionHeader: React.FC<EntryAccordionHeaderProps> = ({
  isOpen,
  toggleAccordion,
  entry,
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
      toggleAccordion(entry.id);
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
          <Image
            width={48}
            height={48}
            imageName={entry.primaryUnit.primaryDetails.image}
          />
        </div>
        <div className={styles.primaryInfo}>
          <div className={styles.unitTypeAndClassification}>
            {entry.primaryUnit.primaryDetails.unitType} -
            {entry.primaryUnit.primaryDetails.classification}
          </div>
          <h2 className={styles.name}>{entry.name}</h2>
        </div>
        <div
          className={classnames(
            styles.accordionIcon,
            isOpen && styles['accordionIcon--active'],
          )}
        >
          <ChevronLeft size={32} color={colors.gray3} />
        </div>
      </div>
      {isOpen && (
        <div>
          <StatsTable
            details={entry.primaryUnit.primaryDetails}
            sectorial={sectorial}
          />
        </div>
      )}
    </div>
  );
};

export default EntryAccordionHeader;

interface EntryAccordionHeaderProps {
  entry: Entry;
  isOpen?: boolean;
  sectorial: Sectorial;
  toggleAccordion: (entryId: string) => void;
}
