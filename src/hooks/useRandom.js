export function rollBetween(min, max, times = 1) {
  let total = 0;
  for (let i = 0; i < times; i++) {
    total += Math.random() * (max - min) + min;
  }
  return total;
}

export default function useRandom() {
  return { rollBetween };
}
