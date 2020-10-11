import cuid from 'cuid';

function generateId(prefix?: string): string {
  const generatedId = cuid();
  return `${prefix}${generatedId}`;
}

export { generateId };
export * from './logger';
