import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  let t = 0;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  const result = t;
  return result;
};

const logic = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(50, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (gcd(num1, num2)).toString();
  return [question, correctAnswer];
};

export { gameRule, logic };
