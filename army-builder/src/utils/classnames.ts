export const classnames = (...args: unknown[]): string =>
  args.filter(arg => typeof arg === 'string' && !!arg.trim()).join(' ');
