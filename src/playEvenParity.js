import readlineSync from 'readline-sync';

const maxLvl = 3;
const minNum = 0;
const maxNum = 20;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playEvenParity = (name) => {
  let winCounter = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const number = getRandomNum(minNum, maxNum);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');

    if (isEven(number) === answer) {
      console.log('Correct!');
      winCounter += 1;
    }

    if (isEven(number) !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(number)}".`);
      winCounter = 0;
    }
  } while (winCounter > 0 && winCounter < maxLvl);

  return winCounter === maxLvl ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

export default playEvenParity;
