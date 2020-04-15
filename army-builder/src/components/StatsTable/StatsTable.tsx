import React from 'react';
import { Details } from '../../types/unit';
import styles from './StatsTable.module.scss';
import { Sectorial } from '../../types/army';
import { classnames } from '../../utils/classnames';

const StatsTable: React.FC<StatsTableProps> = ({ details, sectorial }) => {
  const availability =
    details.ava.find(ava => ava.sectorial === sectorial)?.limit || 'T';

  return (
    <div className={styles.statsTable}>
      <span
        className={classnames(
          styles.statsTableHeaderCell,
          styles['statsTableHeaderCell--left'],
        )}
      >
        MOV
      </span>
      <span className={styles.statsTableHeaderCell}>CC</span>
      <span className={styles.statsTableHeaderCell}>BS</span>
      <span className={styles.statsTableHeaderCell}>PH</span>
      <span className={styles.statsTableHeaderCell}>WIP</span>
      <span className={styles.statsTableHeaderCell}>ARM</span>
      <span className={styles.statsTableHeaderCell}>BTS</span>
      <span className={styles.statsTableHeaderCell}>W</span>
      <span className={styles.statsTableHeaderCell}>S</span>
      <span
        className={classnames(
          styles.statsTableHeaderCell,
          styles['statsTableHeaderCell--right'],
        )}
      >
        AVA
      </span>
      <span
        className={classnames(
          styles.statsTableCell,
          styles['statsTableCell--left'],
        )}
      >
        {details.mov}
      </span>
      <span className={styles.statsTableCell}>{details.cc}</span>
      <span className={styles.statsTableCell}>{details.bs}</span>
      <span className={styles.statsTableCell}>{details.ph}</span>
      <span className={styles.statsTableCell}>{details.wip}</span>
      <span className={styles.statsTableCell}>{details.arm}</span>
      <span className={styles.statsTableCell}>{details.bts}</span>
      <span className={styles.statsTableCell}>{details.w}</span>
      <span className={styles.statsTableCell}>{details.s}</span>
      <span
        className={classnames(
          styles.statsTableCell,
          styles['statsTableCell--right'],
        )}
      >
        {availability}
      </span>
    </div>
  );
};

export default StatsTable;

interface StatsTableProps {
  details: Details;
  sectorial: Sectorial;
}
