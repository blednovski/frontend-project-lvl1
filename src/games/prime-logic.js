import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const logic = () => {
  const num = getRandomNumber(2, 100);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => newGame(gameRule, logic);

export default primeGame;
