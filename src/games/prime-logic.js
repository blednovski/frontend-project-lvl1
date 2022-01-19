import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const primeCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomNumber(2, 100);
    const isPrime = () => {
      for (let i2 = 2; i2 * i2 <= num; i2 += 1) {
        if (num % i2 === 0) return false;
      }
      return true;
    };
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
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
export default primeCheck;
