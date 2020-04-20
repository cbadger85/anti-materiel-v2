import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { BaseRule } from '../types/rule';
import { AmmoStore, WeaponModeStore } from '../types/weapon';
import { commaSeparateList } from '../utils/commaSeparateList';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const getRangeBandColor = (rangeBand?: string): CSSProperties => {
  const [, modifier] = rangeBand?.split(' ') || ['', ''];

  switch (modifier) {
    case '-6':
      return { backgroundColor: '#b20000', color: 'white', fontWeight: 'bold' };
    case '-3':
      return { backgroundColor: '#ffd700', color: 'black', fontWeight: 'bold' };
    case '0':
      return { backgroundColor: '#1e90ff', color: 'black', fontWeight: 'bold' };
    case '+3':
      return { backgroundColor: '#32cd32', color: 'black', fontWeight: 'bold' };
    case '+6':
      return { backgroundColor: '#adff2F', color: 'black', fontWeight: 'bold' };
    default:
      return {};
  }
};

const useStyles = makeStyles(theme => ({
  bottomCell: {
    border: 'none',
  },
}));

const WeaponModeTable: React.FC<WeaponModeTableProps> = ({
  weaponMode,
  ammo,
  traits,
}) => {
  const classes = useStyles();

  const ammoList = commaSeparateList(
    weaponMode.ammoIds.map(
      ammoId => ammo.find(ammo => ammo.id === ammoId)?.name as string,
    ),
  );

  const traitsList = commaSeparateList(
    weaponMode.traitIds.map(
      traitId => traits.find(trait => trait.id === traitId)?.name as string,
    ),
  );

  return (
    <Box marginBottom={3}>
      <Typography variant="button">{weaponMode.name}</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Short Range</TableCell>
            <TableCell align="center">Medium Range</TableCell>
            <TableCell align="center">Long Range</TableCell>
            <TableCell align="center">Maximum Range</TableCell>
            <TableCell align="center">Damage</TableCell>
            <TableCell align="center">Burst</TableCell>
            <TableCell align="center">Ammo</TableCell>
            <TableCell align="center">Traits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              style={{
                ...getRangeBandColor(weaponMode.shortRange),
              }}
              className={classes.bottomCell}
            >
              {weaponMode.shortRange || '--'}
            </TableCell>
            <TableCell
              align="center"
              style={{
                ...getRangeBandColor(weaponMode.mediumRange),
              }}
              className={classes.bottomCell}
            >
              {weaponMode.mediumRange || '--'}
            </TableCell>
            <TableCell
              align="center"
              style={{
                ...getRangeBandColor(weaponMode.longRange),
              }}
              className={classes.bottomCell}
            >
              {weaponMode.longRange || '--'}
            </TableCell>
            <TableCell
              align="center"
              style={{
                ...getRangeBandColor(weaponMode.maximumRange),
              }}
              className={classes.bottomCell}
            >
              {weaponMode.maximumRange || '--'}
            </TableCell>
            <TableCell align="center" className={classes.bottomCell}>
              {weaponMode.damage || '--'}
            </TableCell>
            <TableCell align="center" className={classes.bottomCell}>
              {weaponMode.burst}
            </TableCell>
            <TableCell align="center" className={classes.bottomCell}>
              {weaponMode.ammoIds.length ? ammoList : '--'}
            </TableCell>
            <TableCell align="center" className={classes.bottomCell}>
              {weaponMode.traitIds.length ? traitsList : '--'}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default WeaponModeTable;

interface WeaponModeTableProps {
  weaponMode: WeaponModeStore;
  ammo: AmmoStore[];
  traits: BaseRule[];
}
