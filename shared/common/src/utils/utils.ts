export function transformBooleanProperties(value: string): string {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}

export function getBrowserLanguage(): string {
  return navigator.language;
}

export function getShortBrowserLanguage(): string {
  return navigator.language.split('-')[0];
}
