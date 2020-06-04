import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calcOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return (a + b);

    case '*':
      return (a * b);

    default:
      return (a - b);
  }
};

const generateQuestionAnswer = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operator = operators[getRandomNum(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const answer = String(calcOperation(a, b, operator));

  return [question, answer];
};

const playCalc = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playCalc;
