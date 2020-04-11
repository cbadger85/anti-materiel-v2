import React from 'react';
import { Sectorial } from '../../types/army';
import styles from './ArmyListAccordionItem.module.scss';

const ArmyListAccordionItem: React.FC<ArmyListAccordionItemProps> = ({
  sectorial,
}) => {
  return (
    <div className={styles.container}>
      <img
        width={24}
        height={24}
        src={sectorial.image}
        alt={`${sectorial.name} logo`}
      />
      <span className={styles.name}>{sectorial.name}</span>
    </div>
  );
};

export default ArmyListAccordionItem;

interface ArmyListAccordionItemProps {
  sectorial: {
    name: Sectorial;
    image: string;
  };
}
