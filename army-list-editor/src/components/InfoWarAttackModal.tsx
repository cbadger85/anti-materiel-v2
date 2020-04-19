import React from 'react';
import { InfoWarAttackStore } from '../types/infoWarAttack';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Link,
  makeStyles,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { commaSeparateList } from '../utils/commaSeparateList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: theme.spacing(3),
  },
  table: {
    marginBottom: theme.spacing(3),
  },
  bottomCell: {
    border: 'none',
  },
}));

const InfoWarAttackModal: React.FC<InfoWarAttackModalProps> = ({
  infoWarAttack,
  onClose,
}) => {
  const classes = useStyles();
  const ammo = useSelector((state: RootState) => state.ammo);

  return (
    <Dialog
      open={!!infoWarAttack}
      onClose={onClose}
      aria-labelledby="infowar-attack-title"
      maxWidth="md"
      fullWidth
    >
      {!!infoWarAttack && (
        <>
          <DialogTitle id="infowar-attack-title">
            {infoWarAttack.name} - {infoWarAttack.category}
            <Link
              href={infoWarAttack.link}
              variant="subtitle1"
              className={classes.link}
            >
              {infoWarAttack.link}
            </Link>
          </DialogTitle>
          <DialogContent>
            <Table size="small" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Range</TableCell>
                  <TableCell align="center">Target</TableCell>
                  <TableCell align="center">Skill Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.range || '--'}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.target.length
                      ? commaSeparateList(infoWarAttack.target)
                      : ''}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {commaSeparateList(infoWarAttack.skillType)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table size="small" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Attack Modifier</TableCell>
                  <TableCell align="center">Opponent Modifier</TableCell>
                  <TableCell align="center">Damage</TableCell>
                  <TableCell align="center">Burst</TableCell>
                  <TableCell align="center">Ammo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.attackModifier || '--'}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.opponentModifier || '--'}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.damage || '--'}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.burst || '--'}
                  </TableCell>
                  <TableCell className={classes.bottomCell} align="center">
                    {infoWarAttack.ammoIds.length
                      ? commaSeparateList(
                          infoWarAttack.ammoIds.map(
                            ammoId =>
                              ammo.find(ammo => ammo.id === ammoId)?.name || '',
                          ),
                        )
                      : '--'}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {infoWarAttack.effect && (
              <Box marginBottom={3}>
                <Typography variant="button">Effect:</Typography>
                <Typography>{infoWarAttack.effect}</Typography>
              </Box>
            )}
            {infoWarAttack.special && (
              <Box marginBottom={3}>
                <Typography variant="button">Special:</Typography>
                <Typography>{infoWarAttack.special}</Typography>
              </Box>
            )}
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default InfoWarAttackModal;

interface InfoWarAttackModalProps {
  infoWarAttack?: InfoWarAttackStore;
  onClose: () => void;
}
