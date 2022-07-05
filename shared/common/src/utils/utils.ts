export function transformBooleanProperties(value: string): string {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}

export function isBlankString(value: string): boolean {
  return !value || /^\s*$/.test(value);
}
