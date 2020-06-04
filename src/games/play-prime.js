import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = function (num) {
  if (num <= 1 || num === 4) {
    return false;
  }

  if (num === 2 || num === 3) {
    return true;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
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
