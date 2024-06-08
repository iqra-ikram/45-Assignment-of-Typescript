"use strict";
//TEST FOR EQUALITY AND INEQULITY WITH STRING
let car = "subaru";
console.log("Enquality test:", "iqra ikram" === "iqra ikram");
console.log("Inquality test:", "iqra ikram" === "Sana ali");
//Test using the lower case function
console.log("LowerCase test:", "IQRA IKRAM".toLowerCase() === "iqra ikram");
//numerical tests involving equality and inequality, greater than and less than, or equal to
console.log("Equality test:", 1000 === 1000); //Equality
console.log("Inequality test:", 10 !== 9); //Inequality
console.log("Greater than test", 1000 > 100); //Greater than
console.log("less than test:", 10 < 100); //less than
console.log("greater than and equal to test", 10 >= 10);
console.log("less than and equal to test", 10 <= 10);
//Test using "and" and "or" operators
console.log("And operator test", true && true);
console.log("or operator test", true || false);
//Test whether an item is in a Array
const car1 = [1, 2, 3];
console.log("test number", car1.includes(1));
//Test whether an item is  not in a Array
const car2 = [1, 2, 3];
console.log("test number", !car2.includes(6));
