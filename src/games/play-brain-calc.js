import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const actionsArr = ['+', '-', '*'];

const generateQuestion = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const action = actionsArr[getRandomNum(0, actionsArr.length - 1)];

  if (action === '+') {
    return `${a} + ${b}`;
  }

  if (action === '*') {
    return `${a} * ${b}`;
  }

  if (action === '-') {
    return `${a} - ${b}`;
  }

  return undefined;
};

const generateAnswer = (question) => {
  const questionArr = question.split(' ');
  const a = Number(questionArr[0]);
  const b = Number(questionArr[2]);
  const action = questionArr[1];

  if (action === '+') {
    return String(a + b);
  }

  if (action === '*') {
    return String(a * b);
  }

  if (action === '-') {
    return String(a - b);
  }

  return undefined;
};

const playCalc = (name) => {
  console.log('What is the result of the expression?');
  createFlow(name, generateQuestion, generateAnswer);
};

export default playCalc;
