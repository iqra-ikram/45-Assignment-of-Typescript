var userName = ["admin", "jiya", "hina", "sana"];
userName.forEach(function (userName) {
    if (userName === "admin") {
        console.log("Hello", userName, "would  you like to see a status report?");
    }
    else {
        console.log("Hello", userName, "Thankyou for logging in again");
    }
});
