// if Statement
console.log(`if Statement`);

console.log(``);

console.log(`Exercise 1 — Age Checker`);

let age = 20;

if (age >= 18) {
  console.log('You are an adult');
}

console.log(``);

console.log(`Exercise 2 — Grade Checker`);

let grade = 80;

if (grade >= 75) {
  console.log('PASSED');
}


console.log(``);

console.log(`Exercise 3 — Password Checker`);

let password = 'javascript123';

if (password === 'javascript123') {
    console.log('Login Successful!');
}

console.log(``);

console.log(`Challenge - Student Eligibility Checker`);

let studentName = 'Tanzki';
let age2 = 30;
let grade2 = 80;

if (age2 >= 18) {

    if (grade2 >= 75) {

        console.log('Student Name: ' + studentName);
        console.log('Age: ' + age2);
        console.log('Registration Status: Eligible');

    }

}