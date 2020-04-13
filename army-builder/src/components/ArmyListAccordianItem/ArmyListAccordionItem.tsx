import kebabcase from 'lodash/kebabCase';
import React, { useEffect, useRef } from 'react';
import { ChevronsRight } from 'react-feather';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import { Sectorial } from '../../types/army';
import Image from '../Image/Image';
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

  const sectorialUri = kebabcase(sectorial.name.toLowerCase());

  return (
    <Link to={`/builder/${sectorialUri}`} className={styles.link} ref={linkRef}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image width={28} height={28} imageName={sectorial.image} />
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
