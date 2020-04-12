import React, { useEffect, useRef } from 'react';
import { ChevronsRight } from 'react-feather';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import { Sectorial } from '../../types/army';
import styles from './ArmyListAccordionItem.module.scss';

const ArmyListAccordionItem: React.FC<ArmyListAccordionItemProps> = ({
  sectorial,
  autoFocus,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (linkRef.current && autoFocus) {
      linkRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Link
      to={`/builder/${sectorial.name}`}
      className={styles.link}
      ref={linkRef}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            width={26}
            height={26}
            src={sectorial.image}
            alt={`${sectorial.name} logo`}
          />
        </div>
        <span className={styles.name}>{sectorial.name}</span>
        <ChevronsRight size={16} color={colors.orange4} />
      </div>
    </Link>
  );
};

export default ArmyListAccordionItem;

interface ArmyListAccordionItemProps {
  sectorial: {
    name: Sectorial;
    image: string;
  };
  autoFocus?: boolean;
}
