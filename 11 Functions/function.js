function login(username){
    if(username === undefined || !username){
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in`
}

const check = login("Kshitiz");
console.log(check);

// We can also use the default parameter

function checkLogin(userName = "Kshitiz") {
    return `${userName} just logged in`
}
const check2 = checkLogin();    // Hence, as when no parameter passed, defauult parameter is used
console.log(check2)