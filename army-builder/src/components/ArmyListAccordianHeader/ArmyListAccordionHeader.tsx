import React, { useRef } from 'react';
import { ChevronLeft } from 'react-feather';
import { useRipple } from 'react-use-ripple';
import colors from '../../styles/colors';
import { ArmyName } from '../../types/army';
import { classnames } from '../../utils/classnames';
import Image from '../Image/Image';
import styles from './ArmyListAccordionHeader.module.scss';
import { isKeyboardEvent } from '../../types/typeGuards';

const ArmyListAccordionHeader: React.FC<ArmyListAccordionHeaderProps> = ({
  name,
  imageName,
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
    <div
      className={styles.accordionHeader}
      tabIndex={0}
      ref={accordianRef}
      onClick={handleToggle}
      onKeyDown={handleToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.logoContainer}>
        <Image width={48} height={48} imageName={imageName} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div
        className={classnames(
          styles.accordionIcon,
          isOpen && styles['accordionIcon--active'],
        )}
      >
        <ChevronLeft size={32} color={colors.gray3} />
      </div>
    </div>
  );
};

export default ArmyListAccordionHeader;

interface ArmyListAccordionHeaderProps {
  name: ArmyName;
  imageName: string;
  isOpen?: boolean;
  toggleAccordion: (armyName: ArmyName) => void;
}
