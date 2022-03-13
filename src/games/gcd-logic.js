import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => ((num1 % num2) ? gcd(num2, num1 % num2) : Math.abs(num2));

const logic = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(50, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (gcd(num1, num2)).toString();
  return [question, correctAnswer];
};

const gcdGame = () => newGame(gameRule, logic);

export default gcdGame;
