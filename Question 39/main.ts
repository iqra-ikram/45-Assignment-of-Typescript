// Creating a Function with parameter which return a values in string

function city_country(city: string, country: string): string{
 return`${city}, ${country}`;
}

//Calling a Function AND print returned Value
city_country("karachi", "pakistan");

console.log(city_country("karachi","pakistan"));

console.log(city_country("Russia", "Moscow"));

console.log(city_country("Italy", "Rome"));