import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const createAProgression = (firstEl, diff, length) => {
  const result = [];
  let el = firstEl;

  for (let i = 0; i < length; i += 1) {
    result.push(el);
    el += diff;
  }

  return result;
};

const generateQuestionAnswer = () => {
  const firstElProgression = getRandomNum();
  const diffProgression = getRandomNum();

  const progression = createAProgression(firstElProgression, diffProgression, lengthProgression);
  const hiddenElPosition = getRandomNum(0, lengthProgression - 1);

  const answer = String(progression[hiddenElPosition]);
  progression[hiddenElPosition] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const playProgression = () => {
  runFlow(generateQuestionAnswer, description);
};

export default playProgression;
