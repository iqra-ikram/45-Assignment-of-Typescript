let guest_list : String [] = ['Ali', 'Raza','Zain','Abdullah'];
let absent_guest : string = "Ali";
let new_guest : string = "Zain";

guest_list[0] = new_guest;

guest_list.unshift("noman");
guest_list.splice(2,0, "danish");
guest_list.push("subhan")
for (let i = 0; i < guest_list.length; i++){
    console.log("Dear Mr\n" ,guest_list[i], "\nIt is our pleasure to Invite you to dinner \n Thankyou\n")
}
console.log("sorry we can't arrange a bigger dinner table so only two guest are invited")
while(guest_list.length > 2 ){
     let removeGuest = guest_list.pop();
     console.log(removeGuest, "\n sorry you are not invited to dinner ");
}
for (let i = 0; i < guest_list.length; i++){
    console.log("Dear Mr\n" ,guest_list[i], "\nyou are still Invited you to dinner \n Thankyou\n")
}
guest_list.splice(0,2);
console.log(guest_list);