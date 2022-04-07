import getRandomNumber from '../utils.js';
import startNewGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => ((number1 % number2) ? (
  getGCD(number2, number1 % number2)) : Math.abs(number2));

const generateRound = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(50, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = (getGCD(number1, number2)).toString();
  return [question, correctAnswer];
};

const runGcdGame = () => startNewGame(description, generateRound);

export default runGcdGame;
