function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = " I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, "  print on shirt"));
}
// Calling a Function with by default values
makeShirt();
// Calling a Function now with Medium size and default message
makeShirt("Medium ");
//Calling a Function now with small size and Differnt Print message
makeShirt("small", "I love javaScript");
