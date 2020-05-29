import readlineSync from 'readline-sync';

const createFlow = (generateQuestionAnswer, description) => {
  let winCounter = 0;
  const maxLvl = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);

  do {
    const task = generateQuestionAnswer()[0];
    const answer = generateQuestionAnswer()[1];

    console.log(`Question: ${task}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer === answerUser) {
      console.log('Correct!');
      winCounter += 1;
    }

    if (answer !== answerUser) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answer}".`);
      winCounter = 0;
    }
  } while (winCounter > 0 && winCounter < maxLvl);

  return winCounter === maxLvl ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

export default createFlow;
