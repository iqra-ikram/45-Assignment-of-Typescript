var guest_list = ['Ali', 'Raza', 'Zain', 'Abdullah'];
var absent_guest = "Ali";
var new_guest = "Zain";
guest_list[0] = new_guest;
console.log("Good News , we found a bigger dinner table so we invite 3 more guest");
guest_list.unshift("noman");
guest_list.splice(2, 0, "danish");
guest_list.push("subhan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Mr\n", guest_list[i], "\nIt is our pleasure to Invite you to dinner \n Thankyou\n");
}
