import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (numFirst, numSecond) => {
  let a = numFirst;
  let b = numSecond;

  if (a === b) {
    return a;
  }

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
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

  return a + b;
};

const generateQuestionAnswer = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  const question = `${a} ${b}`;
  const answer = String(findGcd(a, b));

  return [question, answer];
};

const playGcd = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playGcd;
