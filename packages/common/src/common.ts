export function transformBooleanProperties(value: string) {
  console.log('COMMMON');
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
