import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) b = a % (a = b);
  return a;
};

const logic = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(50, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (gcd(num1, num2)).toString();
  return [question, correctAnswer];
};

const gcdGame = () => newGame(gameRule, logic);

export default gcdGame;
