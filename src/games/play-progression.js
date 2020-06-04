import runFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const createHiddenElPosition = () => getRandomNum(0, lengthProgression - 1);

const generateQuestionAnswer = () => {
  const progression = [];
  let el = getRandomNum();
  const difference = getRandomNum();
  const HiddenElPosition = createHiddenElPosition();

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(el);
    el += difference;
  }

  const answer = String(progression[HiddenElPosition]);
  progression[HiddenElPosition] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const playProgression = () => {
  runFlow(generateQuestionAnswer, description);
};


export default playProgression;
