// Rejects negative numbers while typing (min="0" alone doesn't stop React from storing "-5").
export function nonNegative(value) {
  return value === '' || Number(value) >= 0
}
