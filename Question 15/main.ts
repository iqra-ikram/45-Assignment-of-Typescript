let guest_list : String [] = ['Ali', 'Raza','Zain','Abdullah'];
let absent_guest : string = "Ali";
let new_guest : string = "Zain";

guest_list[0] = new_guest;

for (let i = 0; i < guest_list.length; i++){
    console.log("Dear Mr\n" ,guest_list[i], "\nIt is our pleasure to Invite you to dinner \n Thankyou\n")
}
console.log(absent_guest, "Is not comming to the dinner")