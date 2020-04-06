export const prettyPrintLog = (data: unknown): void =>
  console.log(JSON.stringify(data, undefined, 2));
