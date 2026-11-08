// Lesson 11: Logical Operators sa JavaScript
console.log(`Lesson 11: Logical Operators sa JavaScript`);

console.log(``);

console.log(`Gawin ang mga sumusunod sa iyong script.js file.`);
console.log(``);

console.log(`Exercise 1 — AND (&&)`);
const age4 = 25;
const hasID = true;

console.log(age4 >= 18 && hasID);
console.log(age4 >= 18 && false);
console.log(age4 < 18 && hasID);

console.log(``);

console.log(`Exercise 2 — OR (||)`);
const hasPassword = false;
const hasRecoveryCode = true;

console.log(hasPassword || hasRecoveryCode);
console.log(false || false);
console.log(true || false);

console.log(``);

console.log(`Exercise 3 — NOT (!)`);
const isLoggedIn = false;
const isBlocked = true;

console.log(!isLoggedIn);
console.log(!isBlocked);
console.log(!!isLoggedIn);

console.log(`Challenge — Student Access Checker`);
console.log(`Gumawa ng program na may requirements na ito:
- const studentName = 'Tanzki';
- const age = 20;
- const hasID = true;
- const isBlocked = false;
- Gumamit ng &&, >=, at ! para alamin kung puwedeng pumasok ang student.
- I-print ang pangalan, edad, kung may ID, kung blocked, at ang resulta ng canEnter.
- Gumamit ng template literals para sa report.
`);

const studentName6 = 'Tanzki';
const age5 = 20;
const hasID2 = true;
const isBlocked2 = false;

const canEnter = age5 >= 18 && hasID2 && !isBlocked2;

console.log(`=== Student Access Report ===`);
console.log(`Student: ${studentName6}`);
console.log(`Age: ${age5}`);
console.log(`Has ID: ${hasID2}`);
console.log(`Is Blocked: ${isBlocked2}`);
console.log(`Can Enter: ${canEnter}`);
