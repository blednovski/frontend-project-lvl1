/* eslint-disable default-case */
/* eslint-disable consistent-return */

import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = (num1, num2, randomOperator) => {
  switch (randomOperator) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    case '*': return (num1 * num2);
  }
};

const logic = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 10);
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = (calc(num1, num2, randomOperator)).toString();
  return [question, correctAnswer];
};

export { gameRule, logic };
