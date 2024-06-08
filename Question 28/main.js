var age = 50;
//if the person is less than 2 years old
//print a message that the person is a baby.
if (age < 2) {
    console.log("the person is a baby.");
}
//if the person is less than 2 years old but less than 4,
//print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
//if the person is at least 4 year old but less than 13,
//print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
}
//if the person is at least 13 year old but less than 20.
//print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
//if the person is at least 20 year old but less than 65.
//print a message that the person is a adult.
else if (age >= 20 && age < 65) {
    console.log("the person is an adult.");
}
//if the person is age 65 or older, 
///print a message that the person is an elder
else if (age >= 65 && age > 65) {
    console.log("the person is an elder.");
}
