import createFlow from '../flow.js';
// import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAnswer = () => {

};

// const generateQuestion = () => String(getRandomNum());

// const generateAnswer = (question) => {
//   const num = Number(question);
//   if (num <= 1 || num === 4) {
//     return 'no';
//   }

//   if (num === 2 || num === 3) {
//     return 'yes';
//   }

//   for (let i = 2; i < num / 2; i += 1) {
//     if (num % i === 0) {
//       return 'no';
//     }
//   }

//   return 'yes';
// };

const playPrime = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playPrime;
