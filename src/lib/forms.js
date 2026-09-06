// min/max HTML attrs alone don't stop React from storing an out-of-range typed value.
export function nonNegative(value) {
  return value === '' || Number(value) >= 0
}

export function inRange(value, min, max) {
  return value === '' || (Number(value) >= min && Number(value) <= max)
}
