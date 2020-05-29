import createFlow from '../flow.js';
// import getRandomNum from '../random-num.js';

const description = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {

};

// const lengthProgression = 10;
// const createHiddenElPosition = () => getRandomNum(0, lengthProgression - 1);

// const generateQuestion = () => {
//   const progression = [];
//   let el = getRandomNum();
//   const difference = getRandomNum();
//   const HiddenElPosition = createHiddenElPosition();
//   for (let i = 0; i < lengthProgression; i += 1) {
//     progression.push(el);
//     el += difference;
//   }
//   progression[HiddenElPosition] = '..';

//   return progression.join(' ');
// };

// const generateAnswer = (question) => {
//   const progressionArr = question.split(' ');
//   for (let i = 0; i < progressionArr.length; i += 1) {
//     if (progressionArr[i] === '..') {
//       const elBefore = Number(progressionArr[i - 1]);
//       const elAfter = Number(progressionArr[i + 1]);
//       const isFirstEl = i <= 1;
//       const difference = isFirstEl
//         ? Number(progressionArr[i + 2]) - elAfter
//         : elBefore - Number(progressionArr[i - 2]);
//       return isFirstEl ? String(elAfter - difference) : String(elBefore + difference);
//     }
//   }
//   return undefined;
// };

const playProgression = () => {
  createFlow(generateQuestionAnswer, description);
};


export default playProgression;
