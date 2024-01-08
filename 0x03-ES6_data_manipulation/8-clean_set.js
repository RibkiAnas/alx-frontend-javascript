export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((item) => {
    if (item.startsWith(startString) && startString.length > 0) {
      result.push(item.slice(startString.length));
    }
  });
  return result.join('-');
}
