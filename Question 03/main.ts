// lower case 
let personName: string ="Iqra"
console.log("lowercase:", personName.toLowerCase());


// upper case

console.log("uppercase:", personName.toLocaleUpperCase());


//Title case
console.log("titlecase:",personName.replace(/\bw/g,c=> c.toUpperCase()));