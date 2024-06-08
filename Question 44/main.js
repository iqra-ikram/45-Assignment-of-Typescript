function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following item: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
//call the functions three times with different number of arguments
makeSandwich("Chicken", "Cheese", "cucumber", "ketchup");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", " Egg", "onion", "cheese", "tomato", "Mayo", "carrot");
