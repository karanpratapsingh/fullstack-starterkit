import cuid from 'cuid';

export const generateId = (prefix?: string): string => {
  const generatedId = cuid();
  return `${prefix}${generatedId}`;
};
