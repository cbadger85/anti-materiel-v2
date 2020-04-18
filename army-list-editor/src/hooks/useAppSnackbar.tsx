import { Button } from '@material-ui/core';
import { useSnackbar, VariantType } from 'notistack';
import React from 'react';

export const useAppSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (message: string, variant: VariantType) =>
    enqueueSnackbar(message, {
      variant,
      action: key => (
        <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
      ),
    });
};
