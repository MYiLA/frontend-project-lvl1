import readlineSync from 'readline-sync';

const createFlow = (name, questionFunction, answerFunction) => {
  let winCounter = 0;
  const maxLvl = 3;
  do {
    const question = questionFunction();
    const answer = answerFunction(question);

    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer:');

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
