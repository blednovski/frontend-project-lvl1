import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

const logic = () => {
  const progLength = getRandomNumber(5, 11);
  const generateProgression = (progInitNum, progStep) => {
    const arr = [];
    for (let i = 0; i < progLength; i += 1) {
      arr.push(progInitNum + (progStep * i));
    }
    return arr;
  };
  const progInitNum = getRandomNumber(1, 50);
  const progStep = getRandomNumber(3, 7);
  const correctNumPosition = getRandomNumber(1, progLength);
  const arr = generateProgression(progInitNum, progStep);
  const correctAnswer = arr[correctNumPosition].toString();
  arr[correctNumPosition] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const progGame = () => newGame(gameRule, logic);

export default progGame;
