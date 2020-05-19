import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const generateQuestion = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  return `${a} ${b}`;
};

const generateAnswer = (question) => {
  const questionArr = question.split(' ');
  let a = Number(questionArr[0]);
  let b = Number(questionArr[1]);
  if (a === b) {
    return String(a);
  }
  if (a === 0) {
    return String(b);
  }
  if (b === 0) {
    return String(a);
  }
  if (a !== 0 && b !== 0) {
    do {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    } while (a !== 0 && b !== 0);
  }
  return String(a + b);
};

const playGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  createFlow(name, generateQuestion, generateAnswer);
};
export default playGcd;
