export function errorpop(value: string, isEmpty: boolean) {
  if (value === "" && isEmpty) return true;
  else return false;
}
