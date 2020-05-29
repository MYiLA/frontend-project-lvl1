import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const createHiddenElPosition = () => getRandomNum(0, lengthProgression - 1);

const generateQuestionAnswer = () => {
  const taskArr = [];
  const progression = [];
  let el = getRandomNum();
  const difference = getRandomNum();
  const HiddenElPosition = createHiddenElPosition();

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(el);
    el += difference;
  }

  taskArr[1] = String(progression[HiddenElPosition]);
  progression[HiddenElPosition] = '..';
  taskArr[0] = progression.join(' ');

  return taskArr;
};

const playProgression = () => {
  createFlow(generateQuestionAnswer, description);
};


export default playProgression;
