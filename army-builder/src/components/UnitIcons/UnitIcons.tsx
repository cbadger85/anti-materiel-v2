import React from 'react';
import { ReactComponent as Cube2Icon } from '../../images/cube-2-0.svg';
import { ReactComponent as CubeIcon } from '../../images/cube.svg';
import { ReactComponent as ExtremelyImpetuousIcon } from '../../images/extremely-impetuous.svg';
import { ReactComponent as FrenzyIcon } from '../../images/frenzy.svg';
import { ReactComponent as HackableIcon } from '../../images/hackable.svg';
import { ReactComponent as ImpetuousIcon } from '../../images/impetuous.svg';
import { ReactComponent as IrregularOrderIcon } from '../../images/irregular-order.svg';
import { ReactComponent as RegularOrderIcon } from '../../images/regular-order.svg';
import { Cube, Impetuous, OrderType } from '../../types/unit';
import styles from './UnitIcons.module.scss';

const iconProps = {
  width: 10,
  height: 10,
  className: styles.icon,
};

const CubeContainer: React.FC<{ cube?: Cube }> = ({ cube }) => {
  switch (cube) {
    case Cube.CUBE:
      return <CubeIcon {...iconProps} />;
    case Cube.CUBE_V2:
      return <Cube2Icon {...iconProps} />;
    default:
      return null;
  }
};

const OrderContainer: React.FC<{ order?: OrderType }> = ({ order }) => {
  switch (order) {
    case OrderType.IRREGULAR:
      return <IrregularOrderIcon {...iconProps} />;
    case OrderType.REGULAR:
      return <RegularOrderIcon {...iconProps} />;
    default:
      return null;
  }
};

const ImpetuousContainer: React.FC<{ impetuous?: Impetuous }> = ({
  impetuous,
}) => {
  switch (impetuous) {
    case Impetuous.FRENZY:
      return <FrenzyIcon {...iconProps} />;
    case Impetuous.IMPETUOUS:
      return <ImpetuousIcon {...iconProps} />;
    case Impetuous.EXTREMELY_IMPETUOUS:
      return <ExtremelyImpetuousIcon {...iconProps} />;
    default:
      return null;
  }
};

const HackableContainer: React.FC<{ hackable?: boolean }> = ({ hackable }) => {
  return hackable ? <HackableIcon {...iconProps} /> : null;
};

const UnitIcon: React.FC<UnitIconProps> = ({
  cube,
  order,
  impetuous,
  hackable,
}) => {
  return (
    <div className={styles.unitIcons}>
      <CubeContainer cube={cube} />
      <OrderContainer order={order} />
      <ImpetuousContainer impetuous={impetuous} />
      <HackableContainer hackable={hackable} />
    </div>
  );
};

export default UnitIcon;

interface UnitIconProps {
  cube?: Cube;
  order?: OrderType;
  impetuous?: Impetuous;
  hackable?: boolean;
}
