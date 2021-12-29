/* eslint-disable default-case */
/* eslint-disable consistent-return */

import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const operators = ['+', '-', '*'];
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 10);
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const correctAnswer = () => {
      switch (randomOperator) {
        case '+': return (num1 + num2);
        case '-': return (num1 - num2);
        case '*': return (num1 * num2);
      }
    };

    const question = `${num1} ${randomOperator} ${num2}`;
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
export default calc;
