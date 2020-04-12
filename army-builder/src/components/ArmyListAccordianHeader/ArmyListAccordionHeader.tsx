import React, { useRef, useEffect, useState } from 'react';
import { ArmyName } from '../../types/army';
import { useRipple } from 'react-use-ripple';
import { ChevronLeft } from 'react-feather';
import colors from '../../styles/colors';
import styles from './ArmyListAccordionHeader.module.scss';
import { classnames } from '../../utils/classnames';

const loadImage = async (imageName: string) => {
  const image = await import(`../../images/${imageName}`);

  return image.default;
};

const isKeyboardEvent = <T,>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    console.log(e.type);
    return true;
  }

  return true;
};

const ArmyListAccordionHeader: React.FC<ArmyListAccordionHeaderProps> = ({
  name,
  imageName,
  isOpen,
  toggleAccordion,
}) => {
  const accordianRef = useRef(null);
  const [image, setImage] = useState();
  useRipple(accordianRef);

  useEffect(() => {
    loadImage(imageName).then(img => {
      setImage(img);
    });
  }, [imageName]);

  const handleToggle = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      isKeyboardEvent(e) &&
      (e.key === 'Enter' || e.key === 'Space' || !e.key)
    ) {
      toggleAccordion(name);
    }
  };

  console.log(image);

  return (
    <div
      className={styles.accordionHeader}
      tabIndex={0}
      ref={accordianRef}
      onClick={handleToggle}
      onKeyDown={handleToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.logoContainer}>
        <img width={32} height={32} src={image} alt={`${name} logo`} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div
        className={classnames(
          styles.accordionIcon,
          isOpen && styles['accordionIcon--active'],
        )}
      >
        <ChevronLeft size={32} color={colors.gray3} />
      </div>
    </div>
  );
};

export default ArmyListAccordionHeader;

interface ArmyListAccordionHeaderProps {
  name: ArmyName;
  imageName: string;
  isOpen?: boolean;
  toggleAccordion: (armyName: ArmyName) => void;
}
