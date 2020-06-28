import cuid from 'cuid';

const generateId = (prefix?: string): string => {
  const generatedId = cuid();
  return `${prefix}${generatedId}`;
};

export { generateId };
export * from './logger';
