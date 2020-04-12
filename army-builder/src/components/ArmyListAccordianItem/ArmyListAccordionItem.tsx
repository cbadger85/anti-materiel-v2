import React, { useEffect, useRef, useState } from 'react';
import { ChevronsRight } from 'react-feather';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import { Sectorial } from '../../types/army';
import styles from './ArmyListAccordionItem.module.scss';
import kebabcase from 'lodash/kebabCase';

const loadImage = async (imageName: string) => {
  const image = await import(`../../images/${imageName}`);

  return image.default;
};

const ArmyListAccordionItem: React.FC<ArmyListAccordionItemProps> = ({
  sectorial,
  autoFocus,
}) => {
  const [image, setImage] = useState();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    loadImage(sectorial.image).then(img => {
      setImage(img);
    });
  }, [sectorial.image]);

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
          <img
            width={26}
            height={26}
            src={image}
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
