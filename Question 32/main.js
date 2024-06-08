"use strict";
let currentUser = ["admin", "Alina", "sana", "mano", "komal"];
let newUsers = ["admin", "Alina", "sana", "bilal", "noman"];
for (let new_users of newUsers) {
    const lowercase_new_user = new_users.toLowerCase();
    if (currentUser.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`the username ${new_users} is already taken please enter a new user name`);
    }
    else {
        console.log(`the username ${new_users} is available`);
    }
}
