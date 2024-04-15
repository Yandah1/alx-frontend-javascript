export default function hasValuesFromArray(set, array) {
  return array.reduce((prev, curr) => prev && set.has(curr), true);
}
