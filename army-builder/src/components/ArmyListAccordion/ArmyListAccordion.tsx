import React, { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import { Army, ArmyName } from '../../types/army';
import ArmyListAccordionContents from '../ArmyListAccordianContents/ArmyListAccordionContents';
import ArmyListAccordionHeader from '../ArmyListAccordianHeader/ArmyListAccordionHeader';
import styles from './ArmyListAccordion.module.scss';

const ArmyListAccordian: React.FC<ArmyListAccordianProps> = ({
  army,
  isOpen,
  toggleAccordion,
}) => {
  const accordianRef = useRef(null);
  useRipple(accordianRef);

  return (
    <div className={styles.accordion}>
      <ArmyListAccordionHeader
        name={army.name}
        imageName={army.image}
        isOpen={isOpen}
        toggleAccordion={toggleAccordion}
      />
      <ArmyListAccordionContents isOpen={isOpen} sectorials={army.sectorials} />
    </div>
  );
};

export default ArmyListAccordian;

interface ArmyListAccordianProps {
  army: Army;
  toggleAccordion: (armyName: ArmyName) => void;
  isOpen?: boolean;
}
