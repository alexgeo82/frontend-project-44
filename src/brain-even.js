#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(.
You need to answer 'yes' or 'no'.
Let's try again, ${name}!`);
      break;
    }

    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
        break;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
