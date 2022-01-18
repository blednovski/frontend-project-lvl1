import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    let num1 = getRandomNumber(1, 50); // progression initial number;
    const num2 = getRandomNumber(3, 7); // progression step;
    const num3 = getRandomNumber(1, 10); // position of correct answer;
    const arr = [];
    for (let i2 = 0; i2 < 10; i2 += 1) {
      arr.push(num1);
      num1 += num2;
    }
    const correctAnswer = arr[num3];
    arr[num3] = '..';
    const question = `${arr.join(' ')}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const failAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;

    if (Number(userAnswer) !== correctAnswer) {
      console.log(failAnswer);
      break;
    }
    console.log('Correct!');
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};
export default progression;
