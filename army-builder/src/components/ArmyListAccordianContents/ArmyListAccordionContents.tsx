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
    <>
      {isOpen && (
        <div className={styles.container} hidden={!isOpen}>
          <div className={styles.contents}>
            {sectorials.map((sectorial, i) => (
              <React.Fragment key={sectorial.name}>
                <SectorialListItem sectorial={sectorial} />
                {i !== sectorials.length - 1 && <Divider color="orange" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
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
