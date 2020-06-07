import readlineSync from 'readline-sync';

const maxLvl = 3;

const runFlow = (generateQuestionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let winCounter = 0; winCounter < maxLvl; winCounter += 1) {
    const [question, answer] = generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer !== answerUser) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runFlow;
