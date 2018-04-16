export function undefinedCell(value) {
  if (value === undefined || value === '' || value === true) {
    return 0;
  } else {
    return value;
  }
}
