import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const evenCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomNumber(1, 100);
    const isEven = () => num % 2 === 0;
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const question = `${num}`;

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
export default evenCheck;
