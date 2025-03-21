#!/usr/bin/env node
import index from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  const prepareData = () => {
    const question = Math.floor(Math.random() * 100);
    let correctAnswer = '';

    if (question < 2) {
      correctAnswer = 'no';
    } else if (question === 2) {
      correctAnswer = 'yes';
    } else {
      for (let i = 2; i < question; i += 1) {
        if (question % i === 0) {
          correctAnswer = 'no';
          break;
        }
        correctAnswer = 'yes';
      }
    }
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
