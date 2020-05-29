import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestionAnswer = () => {
  const taskArr = [];
  taskArr[0] = String(getRandomNum());
  taskArr[1] = isEven(taskArr[0]);
  return taskArr;
};

const playEvenParity = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playEvenParity;
