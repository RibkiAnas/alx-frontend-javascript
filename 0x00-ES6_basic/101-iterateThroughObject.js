export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee}${reportWithIterator.lastIndexOf(employee) === reportWithIterator.length - 1 ? '' : ' | '}`;
  }
  return result;
}
