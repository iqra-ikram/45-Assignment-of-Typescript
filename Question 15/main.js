var guest_list = ['Ali', 'Raza', 'Zain', 'Abdullah'];
var absent_guest = "Ali";
var new_guest = "Zain";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Mr\n", guest_list[i], "\nIt is our pleasure to Invite you to dinner \n Thankyou\n");
}
console.log(absent_guest, "Is not comming to the dinner");
