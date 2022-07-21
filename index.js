var usernamePrompt = prompt('what is ur username');
var passwordPrompt = prompt('what is ur password');

var DB = [
    {username: "isaac", password: "1"},
    {username: "mensah", password: "12"},
    {username: "forson", password: "123"},
]

var newsFeed =  [
    {username: "samson", timeline: "something something"},
    {username: "jake", timeline: "something sweet"},
]

function UserValid(user, pass){
    for (let i = 0; i < DB.length; i++) {
        if (user === DB[i].username && pass === DB[i].password){
            return true
        }
    }
    return false
    }


function login(user, pass){
    if ( UserValid(user, pass)) {
            console.log(newsFeed)
        }else{
            alert('unknown credentials')
        }
        
    }

login(usernamePrompt, passwordPrompt)