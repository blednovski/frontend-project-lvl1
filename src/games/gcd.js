import getRandomNumber from '../getRandomNumber.js';
import startNewGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => ((number1 % number2) ? (
  gcd(number2, number1 % number2)) : Math.abs(number2));

const logic = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(50, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = (gcd(number1, number2)).toString();
  return [question, correctAnswer];
};

const playGcdGame = () => startNewGame(description, logic);

export default playGcdGame;
