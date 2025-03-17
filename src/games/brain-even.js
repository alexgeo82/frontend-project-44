#!/usr/bin/env node
import index from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  const prepareData = () => {
    const question = Math.floor(Math.random() * 100);
    let correctAnswer = '';
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
