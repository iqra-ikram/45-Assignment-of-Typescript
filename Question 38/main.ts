function describe_city(city: string, country: string = "pakistan"): void{
    console.log(`${city} is in ${country}`);
    
}

describe_city(`karachi`) // default sentence 
describe_city(`london`, `England`)
describe_city(`lahore`, `punjab`)