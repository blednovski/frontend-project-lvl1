import readlineSync from 'readline-sync';

const newGame = (gameRule, getRoundData) => {
  const roundsCounter = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);
  for (let i = 1; i <= roundsCounter; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const failAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
    if (userAnswer !== correctAnswer) {
      console.log(failAnswer);
      break;
    }
    console.log('Correct!');
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default newGame;
