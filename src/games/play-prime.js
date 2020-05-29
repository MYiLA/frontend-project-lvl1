import createFlow from '../flow.js';
import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAnswer = () => {
  const taskArr = [];
  const num = getRandomNum();
  taskArr[0] = String(num);

  if (num <= 1 || num === 4) {
    taskArr[1] = 'no';
  } else
  if (num === 2 || num === 3) {
    taskArr[1] = 'yes';
  } else {
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        taskArr[1] = 'no';
        return taskArr;
      }
    }
    taskArr[1] = 'yes';
  }

  return taskArr;
};

const playPrime = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playPrime;
