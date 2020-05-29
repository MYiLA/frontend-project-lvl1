import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswer = () => {
  const taskArr = [];
  let a = getRandomNum();
  let b = getRandomNum();

  taskArr[0] = `${a} ${b}`;

  if (a === b) {
    taskArr[1] = String(a);
  } else
  if (a === 0) {
    taskArr[1] = String(b);
  } else
  if (b === 0) {
    taskArr[1] = String(a);
  } else
  if (a !== 0 && b !== 0) {
    do {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    } while (a !== 0 && b !== 0);

    taskArr[1] = String(a + b);
  }

  return taskArr;
};

const playGcd = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playGcd;
