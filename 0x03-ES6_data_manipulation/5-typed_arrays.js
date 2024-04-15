export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  // check if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  int8Array[position] = value;

  return int8Array;
}
