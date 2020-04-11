import React, { useRef } from 'react';
import { ArmyName } from '../../types/army';
import { useRipple } from 'react-use-ripple';
import { ChevronDown, ChevronUp } from 'react-feather';
import colors from '../../styles/colors';
import styles from './ArmyListAccordionHeader.module.scss';

const isKeyboardEvent = <T,>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    console.log(e.type);
    return true;
  }

  return true;
};

const ArmyListAccordionHeader: React.FC<ArmyListAccordionHeaderProps> = ({
  name,
  image,
  isOpen,
  toggleAccordion,
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
      toggleAccordion(name);
    }
  };

  return (
    <div className={styles.containerShadow}>
      <div
        className={styles.accordionHeader}
        tabIndex={0}
        ref={accordianRef}
        onClick={handleToggle}
        onKeyDown={handleToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.logoContainer}>
          <div className={styles.logoDiamondShadow}>
            <img
              width={46}
              height={46}
              src={image}
              alt={`${name} logo`}
              className={styles.logo}
            />
          </div>
        </div>
        <h2 className={styles.name}>{name}</h2>
        {isOpen ? (
          <ChevronDown size={32} color={colors.teal7} />
        ) : (
          <ChevronUp size={32} color={colors.teal7} />
        )}
      </div>
    </div>
  );
};

export default ArmyListAccordionHeader;

interface ArmyListAccordionHeaderProps {
  name: ArmyName;
  image: string;
  isOpen?: boolean;
  toggleAccordion: (armyName: ArmyName) => void;
}
