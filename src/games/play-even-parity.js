import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const generateQuestion = () => getRandomNum();
const generateAnswer = (question) => isEven(question);

const playEvenParity = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  createFlow(name, generateQuestion, generateAnswer);
};

export default playEvenParity;
