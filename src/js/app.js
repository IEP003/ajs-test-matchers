export default function sortObj(arr) {
  return arr.sort((prev, next) => next.health - prev.health);
}