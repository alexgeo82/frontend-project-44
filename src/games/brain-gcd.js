#!/usr/bin/env node
import index from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
export default () => {
  const prepareData = () => {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    const question = `${num1} ${num2}`;

    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    const correctAnswer = num1.toString();
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
