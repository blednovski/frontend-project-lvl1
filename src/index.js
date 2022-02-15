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
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};

export default newGame;
