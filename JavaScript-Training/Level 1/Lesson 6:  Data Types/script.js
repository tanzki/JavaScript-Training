// Lesson 6 — Data Types
console.log('Lesson 6 — Data Types');

console.log('');
console.log('Exercise 1 — Gumawa ng variables');
console.log(`Gumawa ng variables para sa:
- Pangalan mo — string
- Edad mo — number
- Kung nag-aaral ka ng JavaScript — boolean
- Isang variable na wala pang value — undefined
- Isang variable na sinadyang walang value — null
Gamitin ang console.log() para ipakita ang value ng bawat variable.
`);
const studentName2 = 'Tanzki';
const age = 25;
const isStudent = true;
let favoriteColor;
let middleName = null;

console.log(studentName2);
console.log(age);
console.log(isStudent);
console.log(favoriteColor);
console.log(middleName);

console.log('');

console.log('Exercise 2 — Gamitin ang typeof');
console.log(`Gamit ang mga variables sa Exercise 1, ipakita ang data type ng bawat isa gamit ang typeof.
Expected output kung ang pangalan ay Tanzki at ang edad ay 25:`);
console.log(typeof studentName2);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favoriteColor);
console.log(typeof middleName);

console.log('');

console.log('Challenge — Student Data Report');
console.log(`Gumawa ng program na may ganitong output:`);
const studentName3 = 'Tanzki';
const age3 = 25;
const isLearningJavaScript = true;
let middleName3 = null;

console.log('=== Student Data Report ===');
console.log('Name: ' + studentName3);
console.log('Name type: ' + typeof studentName3);
console.log('Age: ' + age3);
console.log('Age type: ' + typeof age3);
console.log('Is learning JavaScript: ' + isLearningJavaScript);
console.log('Learning type: ' + typeof isLearningJavaScript);
console.log('Middle name: ' + middleName3);
console.log('Middle name type: ' + typeof middleName3);
