// Lesson 7 — Strings at Template Literals
console.log('Lesson 7 — Strings at Template Literals');

console.log('');

console.log('Exercise 1 — String concatenation');
console.log(`Gumawa ng dalawang variables:
- firstName — "Tanzki"
- course — "JavaScript"
Gamitin ang + para ipakita ang:`);
let firstName = 'Tanzki';
let course = 'JavaScript';
console.log('My name is ' + firstName + '.');
console.log('I am learning ' + course + '.');

console.log('');

console.log(`Exercise 2 — Template literals`);
console.log(
  `Gamit ang parehong variables, gumawa ng output gamit ang backticks at $\{...}.'`,
);
console.log(`Hello, ${firstName}!`);
console.log(`Welcome to ${course} Training.`);

console.log('');

console.log('Challenge — Student Profile');
console.log(`Gumawa ng program na may ganitong output:`);
let length = 6;
console.log(`=== Student Profile ===
Name: ${firstName}
Course: ${course}
Name length: ${firstName.length}
Name uppercase: ${firstName.toUpperCase()}
Message: Hello, ${firstName}! You are learning ${course}.`);
