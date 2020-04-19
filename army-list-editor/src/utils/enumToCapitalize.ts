import capitalize from 'lodash/capitalize';

export const enumToCapitalize = (value: string) =>
  value
    .split('_')
    .map(capitalize)
    .join(' ');
