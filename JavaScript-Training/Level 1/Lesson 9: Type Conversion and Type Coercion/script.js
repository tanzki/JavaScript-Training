// Lesson 9: Type Conversion and Type Coercion
console.log('Lesson 9: Type Conversion and Type Coercion');

console.log('');

console.log('Exercise 1 — Convert string to number');
console.log(
  `I-convert ang dalawang variables sa numbers, pagkatapos ay kalkulahin ang total price.`,
);
const priceText = '150';
const quantityText = '3';
const priceNumber = Number(priceText);
const quantityNumber = Number(quantityText);
const totalPrice = priceNumber * quantityNumber;
console.log(totalPrice);

console.log('');

console.log('Exercise 2 — Convert number to string');
console.log(
  `Gawing string ang ticketNumber, pagkatapos ay i-print ang value at ang data type nito.`,
);
const ticketNumber = 12345;
const ticketText = String(ticketNumber);
console.log(ticketText);
console.log(typeof ticketText);

console.log('');

console.log('Exercise 3 — Tukuyin ang coercion');
console.log(`Isulat at patakbuhin ang mga sumusunod:`);
console.log('15' + 5);
console.log('15' - 5);
console.log('15' * 2);
console.log('15' / 3);
console.log(Boolean('0'));
console.log(Boolean(''));

console.log('');

console.log('Challenge — Ticket Cost Calculator');
console.log(`Gumawa ng program na may sumusunod:
- const ticketPriceText = "250";
- let ticketQuantityText = "4";
- I-convert ang dalawang string sa numbers gamit ang Number().
- Kalkulahin ang total cost.
- I-print ang ticket price, quantity, total cost, at data types ng converted values gamit ang template literals.`);
const ticketPriceText = '250';
let ticketQuantityText = '4';
const ticketPriceNumber = Number(ticketPriceText);
const ticketQuantityNumber = Number(ticketQuantityText);
const totalCost = ticketPriceNumber * ticketQuantityNumber;
console.log(`=== Ticket Cost Report ===`);
console.log(`Ticket Price: ${ticketPriceText}`);
console.log(`Quantity: ${ticketQuantityText}`);
console.log(`Total Cost: ${totalCost}`);
console.log(`Price Type: ${typeof ticketPriceNumber}`);
console.log(`Quantity Type: ${typeof quantityNumber}`);
