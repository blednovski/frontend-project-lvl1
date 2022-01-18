import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    let num1 = getRandomNumber(1, 50);
    let num2 = getRandomNumber(50, 100);
    const correctAnswer = () => {
      while (num2) {
        const t = num2;
        num2 = num1 % num2;
        num1 = t;
      }
      return num1;
    };

    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const failAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer()}".\nLet's try again, ${userName}!`;

    if (Number(userAnswer) !== correctAnswer()) {
      console.log(failAnswer);
      break;
    }
    console.log('Correct!');
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};
export default gcd;
