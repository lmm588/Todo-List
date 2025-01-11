export function stringEllipsis(str, length) {
  return str.length > length ? str.slice(0, length) + "..." : str;
};