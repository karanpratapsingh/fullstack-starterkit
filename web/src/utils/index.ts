export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

export function required<T>(value: T | undefined): T {
  if (!value) {
    throw new Error('value is required');
  }

  return value;
}
