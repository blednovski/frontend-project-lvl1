import getRandomNumber from '../getRandomNumber.js';
import startNewGame from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (progInitialNumber, progStep, progLength) => {
  const arr = [];
  for (let i = 0; i < progLength; i += 1) {
    arr.push(progInitialNumber + (progStep * i));
  }
  return arr;
};

const logic = () => {
  const progLength = getRandomNumber(5, 11);
  const progInitialNumber = getRandomNumber(1, 50);
  const progStep = getRandomNumber(3, 7);
  const correctNumberPosition = getRandomNumber(1, progLength - 1);
  const arr = generateProgression(progInitialNumber, progStep, progLength);
  const correctAnswer = arr[correctNumberPosition].toString();
  arr[correctNumberPosition] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const playProgGame = () => startNewGame(description, logic);

export default playProgGame;
