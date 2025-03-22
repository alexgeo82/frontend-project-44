#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import index from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
export default () => {
  const gcd = (num1, num2) => {
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1.toString();
  };

  const prepareData = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
