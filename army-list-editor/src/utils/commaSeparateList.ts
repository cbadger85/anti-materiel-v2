export const commaSeparateList = (list: string[], separator = ', ') =>
  list.map((string, i) =>
    i === list.length - 1 ? string : string + separator,
  );
