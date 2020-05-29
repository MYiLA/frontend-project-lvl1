import readlineSync from 'readline-sync';

const createFlow = (generateQuestionAnswer, description) => {
  const maxLvl = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let winCounter = 0; ;) {
    if (winCounter === maxLvl) {
      return console.log(`Congratulations, ${name}!`);
    }

    const taskArr = generateQuestionAnswer();
    const task = taskArr[0];
    const answer = taskArr[1];

    console.log(`Question: ${task}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer !== answerUser) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    if (answer === answerUser) {
      console.log('Correct!');
      winCounter += 1;
    }
  }
};

export default createFlow;
