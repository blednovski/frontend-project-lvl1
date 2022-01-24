import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const progression = (num1, num2) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(num1 + (num2 * i));
  }
  return arr;
};

const logic = () => {
  const num1 = getRandomNumber(1, 50); // progression initial number;
  const num2 = getRandomNumber(3, 7); // progression step;
  const num3 = getRandomNumber(1, 10); // position of correct answer;
  const arr = progression(num1, num2);
  const correctAnswer = arr[num3].toString();
  arr[num3] = '..';
  const question = `${arr.join(' ')}`;
  return [question, correctAnswer];
};

export { gameRule, logic };
