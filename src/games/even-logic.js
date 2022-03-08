import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const logic = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => newGame(gameRule, logic);

export default evenGame;
