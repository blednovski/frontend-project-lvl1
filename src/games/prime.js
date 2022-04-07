import getRandomNumber from '../utils.js';
import startNewGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => startNewGame(description, generateRound);

export default runPrimeGame;
