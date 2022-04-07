import getRandomNumber from '../utils.js';
import startNewGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, number2, randomOperator) => {
  switch (randomOperator) {
    case '+': return (number1 + number2);
    case '-': return (number1 - number2);
    case '*': return (number1 * number2);
    default: throw new Error('Unknown operator!');
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 10);
  const indexOperator = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[indexOperator];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = (calculate(number1, number2, randomOperator)).toString();
  return [question, correctAnswer];
};

const runCalcGame = () => startNewGame(description, generateRound);

export default runCalcGame;
