import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const [{ body }, { firstName, lastName }] = await Promise
      .all([uploadPhoto(), createUser()]);
    console.log(body, firstName, lastName);
  } catch {
    return console.log('Signup system offline');
  }
}
