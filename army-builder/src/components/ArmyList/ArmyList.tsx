import React, { useState } from 'react';
import { armies, ArmyName } from '../../types/army';
import ArmyListAccordion from '../ArmyListAccordion/ArmyListAccordion';
import styles from './ArmyList.module.scss';

const ArmyList = () => {
  const [openAccordion, setOpenAccordion] = useState<ArmyName>();

  const toggleAccordion = (armyName: ArmyName) => {
    setOpenAccordion(name => (name !== armyName ? armyName : undefined));
  };

  return (
    <div className={styles.container}>
      {armies.map(army => (
        <ArmyListAccordion
          key={army.name}
          army={army}
          isOpen={army.name === openAccordion}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default ArmyList;
