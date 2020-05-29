import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const actionsArr = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const generateQuestionAnswer = () => {
  const taskArr = [];

  const a = getRandomNum();
  const b = getRandomNum();

  const action = actionsArr[getRandomNum(0, actionsArr.length - 1)];

  if (action === '+') {
    taskArr[0] = `${a} + ${b}`;
    taskArr[1] = String(a + b);
  } else

  if (action === '*') {
    taskArr[0] = `${a} * ${b}`;
    taskArr[1] = String(a * b);
  } else

  if (action === '-') {
    taskArr[0] = `${a} - ${b}`;
    taskArr[1] = String(a - b);
  }

  return taskArr;
};

const playCalc = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playCalc;
