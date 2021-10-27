export default function useFormat() {
  return function (num) {
    return Math.round(num * 100) / 100;
  };
}
