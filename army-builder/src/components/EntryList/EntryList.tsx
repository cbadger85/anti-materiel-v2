import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEntryList } from '../../store/entryListSlice';
import { RootState } from '../../store/rootReducer';
import { Sectorial } from '../../types/army';
import EntryAccordion from '../EntryAccordion/EntryAccordion';
import styles from './EntryList.module.scss';

const EntryList: React.FC<EntryListProps> = ({ sectorial }) => {
  const [openAccordion, setOpenAccordion] = useState<string>();

  const entryList = useSelector((state: RootState) => state.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createEntryList(sectorial));
  }, [sectorial, dispatch]);

  const toggleAccordion = (entryId: string) => {
    setOpenAccordion(id => (id !== entryId ? entryId : undefined));
  };

  console.log(entryList);

  return (
    <div className={styles.container}>
      {entryList.map(entry => (
        <EntryAccordion
          key={entry.id}
          isOpen={openAccordion === entry.id}
          toggleAccordion={toggleAccordion}
          entry={entry}
        />
      ))}
    </div>
  );
};

export default EntryList;

interface EntryListProps {
  sectorial: Sectorial;
}
