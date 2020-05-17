import readlineSync from 'readline-sync';

const askName = (game = () => undefined) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  game(name);
};
export default askName;
