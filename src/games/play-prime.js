import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor < (num + 1) / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAnswer = () => {
  const num = getRandomNum();
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

const playPrime = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playPrime;
