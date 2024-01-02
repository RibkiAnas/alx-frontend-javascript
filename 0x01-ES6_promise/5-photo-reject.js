export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve(fileName);
    } else {
      reject(Error(`${fileName} cannot be processed`));
    }
  });
}
