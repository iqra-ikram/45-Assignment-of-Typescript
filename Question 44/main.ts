function makeSandwich(...items: string[]){
    console.log("\n Making a sandwich with the following item: \n");

    items.forEach(singleItem =>console.log(singleItem));

    console.log("\n Now Enjoy Sandwich");
}
    

//call the functions three times with different number of arguments
makeSandwich("Chicken", "Cheese", "cucumber", "ketchup");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", " Egg", "onion","cheese","tomato", "Mayo", "carrot");

