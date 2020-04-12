import React, { useRef, useState, useEffect } from 'react';
import styles from './EntryAccordionHeader.module.scss';
import { classnames } from '../../utils/classnames';
import { useRipple } from 'react-use-ripple';
import { ChevronLeft } from 'react-feather';
import colors from '../../styles/colors';

const isKeyboardEvent = <T,>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    console.log(e.type);
    return true;
  }

  return true;
};

const loadImage = async (imageName: string) => {
  const image = await import(`../../images/${imageName}`);

  return image.default;
};

const EntryAccordionHeader: React.FC<EntryAccordionHeaderProps> = ({
  id,
  name,
  imageName,
  isOpen,
  toggleAccordion,
}) => {
  const [image, setImage] = useState();
  const accordianRef = useRef(null);
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
      toggleAccordion(id);
    }
  };

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

export default EntryAccordionHeader;

interface EntryAccordionHeaderProps {
  id: string;
  name: string;
  imageName: string;
  isOpen?: boolean;
  toggleAccordion: (entryId: string) => void;
}
