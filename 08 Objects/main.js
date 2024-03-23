const allUsers = [{
    firstName: "Kshitiz",
    gender: "male"
},{
    firstName: "Tyakshi",
    gender: "female"
},{
    firstName: "Mohnish",
    gender: "male"
},{
    firstName: "Diptanshu",
    gender: "male"
},{
    firstName: "Arsh",
    gender: "male"
},{
    firstName: "Tanay",
    gender: "male"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "female"){
        console.log(allUsers[i]["firstName"]);
    }
}