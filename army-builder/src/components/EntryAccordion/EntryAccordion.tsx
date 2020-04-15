import React, { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import { Entry } from '../../types/entry';
// import ArmyListAccordionContents from '../ArmyListAccordianContents/ArmyListAccordionContents';
// import ArmyListAccordionHeader from '../ArmyListAccordianHeader/ArmyListAccordionHeader';
import styles from './EntryAccordion.module.scss';
import EntryAccordionHeader from '../EntryAccordionHeader/EntryAccordionHeader';
import { Sectorial } from '../../types/army';

const EntryAccordion: React.FC<EntryAccordionProps> = ({
  entry,
  isOpen,
  toggleAccordion,
  sectorial,
}) => {
  const accordianRef = useRef(null);
  useRipple(accordianRef);

  return (
    <div className={styles.accordion}>
      <EntryAccordionHeader
        id={entry.id}
        name={entry.name}
        details={entry.primaryUnit.primaryDetails}
        isOpen={isOpen}
        toggleAccordion={toggleAccordion}
        sectorial={sectorial}
      />
      {/* <ArmyListAccordionContents isOpen={isOpen} sectorials={army.sectorials} /> */}
    </div>
  );
};

export default EntryAccordion;

interface EntryAccordionProps {
  entry: Entry;
  toggleAccordion: (entryId: string) => void;
  isOpen?: boolean;
  sectorial: Sectorial;
}
