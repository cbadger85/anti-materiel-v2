import kebabcase from 'lodash/kebabCase';
import React, { useRef } from 'react';
import { ChevronsRight } from 'react-feather';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import { Sectorial } from '../../types/army';
import Image from '../Image/Image';
import styles from './ArmyListAccordionItem.module.scss';

const ArmyListAccordionItem: React.FC<ArmyListAccordionItemProps> = ({
  sectorial,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const sectorialUri = kebabcase(sectorial.name.toLowerCase());

  return (
    <Link
      to={{
        pathname: `/builder/${sectorialUri}`,
        state: { direction: 'right' },
      }}
      className={styles.link}
      ref={linkRef}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image width={38} height={38} imageName={sectorial.image} />
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
}
