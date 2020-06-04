import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (numFirst, numSecond) => {
  let a = numFirst;
  let b = numSecond;

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

const generateQuestionAnswer = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  const question = `${a} ${b}`;
  const answer = findGcd(a, b);

  return [question, answer];
};

const playGcd = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playGcd;
