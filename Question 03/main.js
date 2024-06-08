// lower case 
var personName = "Iqra";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
