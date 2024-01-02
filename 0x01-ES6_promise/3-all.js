import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then(([{ firstName, lastName }, { body }]) => {
      console.log(body, firstName, lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
