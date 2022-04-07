import getRandomNumber from '../utils.js';
import startNewGame from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (initialNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(initialNumber + (step * i));
  }
  return arr;
};

const generateRound = () => {
  const progLength = getRandomNumber(5, 11);
  const progInitialNumber = getRandomNumber(1, 50);
  const progStep = getRandomNumber(3, 7);
  const hiddenNumberIndex = getRandomNumber(1, progLength - 1);
  const arr = generateProgression(progInitialNumber, progStep, progLength);
  const correctAnswer = arr[hiddenNumberIndex].toString();
  arr[hiddenNumberIndex] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const runProgGame = () => startNewGame(description, generateRound);

export default runProgGame;
