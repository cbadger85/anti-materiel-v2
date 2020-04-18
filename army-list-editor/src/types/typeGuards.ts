export const isKeyboardEvent = <T>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    return true;
  }

  return true;
};
