#!/usr/bin/env node
import index from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

export default () => {
  const prepareData = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
