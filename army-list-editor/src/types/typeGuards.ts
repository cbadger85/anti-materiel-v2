export const isKeyboardEvent = <T>(
  e: React.SyntheticEvent<T, unknown>,
): e is React.KeyboardEvent<T> => {
  if (e.type === 'keyboard') {
    console.log(e.type);
    return true;
  }

  return true;
};
