import getRandomNumber from '../getRandomNumber.js';
import startNewGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const logic = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playEvenGame = () => startNewGame(description, logic);

export default playEvenGame;
