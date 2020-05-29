import createFlow from '../flow.js';
// import getRandomNum from '../random-num.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {

};

// const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
// const generateQuestion = () => getRandomNum();
// const generateAnswer = (question) => isEven(question);

const playEvenParity = () => {
  createFlow(generateQuestionAnswer, description);
};

export default playEvenParity;
