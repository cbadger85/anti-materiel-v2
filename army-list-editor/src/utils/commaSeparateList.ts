export const commaSeparateList = (list: string[]) =>
  list.map((string, i) => (i === list.length - 1 ? string : `${string}, `));
