import 'dotenv/config';

const userCredentials = { firstname: 'Aman' };
const userDetails = { nationality: 'Indian' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
