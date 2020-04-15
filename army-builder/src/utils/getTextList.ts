export const getTextList = (list: string[]) =>
  list.map((text, i) => `${text}${i < list.length - 1 ? ', ' : ''}`);
