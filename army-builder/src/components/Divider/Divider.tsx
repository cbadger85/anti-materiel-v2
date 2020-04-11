import React from 'react';
import style from './Divider.module.scss';
import colors from '../../styles/colors';

const dividerColors = {
  orange: colors.orange4,
  gray: colors.warmGray2,
};

const Divider: React.FC<DividerProps> = ({ color = 'gray' }) => {
  return (
    <hr
      className={style.divider}
      style={{ borderColor: dividerColors[color] }}
    />
  );
};

export default Divider;

interface DividerProps {
  color?: keyof typeof dividerColors;
}
