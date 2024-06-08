let guest_list : String [] = ['Ali', 'Raza','Zain','Abdullah'];
let absent_guest : string = "Ali";
let new_guest : string = "Zain";

guest_list[0] = new_guest;

console.log("Good News , we found a bigger dinner table so we invite 3 more guest");

guest_list.unshift("noman");
guest_list.splice(2,0, "danish");
guest_list.push("subhan")
for (let i = 0; i < guest_list.length; i++){
    console.log("Dear Mr\n" ,guest_list[i], "\nIt is our pleasure to Invite you to dinner \n Thankyou\n")
}