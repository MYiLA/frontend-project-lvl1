import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateQuestionAnswer = () => {
  const question = String(getRandomNum());
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question, answer];
};

const playEvenParity = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playEvenParity;
