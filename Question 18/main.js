//store the location in a ARRAY. Make sure the array is 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//not in Alphabetical order.
var places = ["Karachi", "Peshawar", "Multan", "Lahore", "Islamabad"];
//PRINT YOUR ARRAY IN ITS ORIGINAL ORDER.
console.log("original order:", places);
//print a ARRAY in alphabetical order without modifying te actual list.
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//show that your ARRAY is still in original order by printing it.
console.log("original order:", places);
//print your Array in reverse alphabetical order withot changing the order of the orginal list.
console.log(" Reverse Alphabetical order:", __spreadArray([], places, true).sort().reverse());
//show that your ARRAY is still in its original order by printing it again.
console.log("original order:", places);
//Reverse the order of your list. print the ARRAY to show that its order has changed
console.log("Reverse order:", places.reverse());
//Reverse the order of your list again. print the  list to show its back to its original ordee.
console.log("original order:", places.reverse());
//sort your ARRAY so its stored in alphabetical order. 
console.log("Alphabetical order:", places.sort());
//sort to change your array so its stored in reverse alphabetical order. 
console.log(" Reverse Alphabetical order:", places.sort().reverse());
