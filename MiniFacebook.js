
// created a variable called obj which is an object with properties and values


// created a variable called database which is an array with an object as its value
var database = [{
        username: "Khalid",
        password: "djk",
    },
    {
        username: "Kelly",
        password: "rowan",
    },
    {
        username: "Ash",
        password: "ketchum",
    },
    {
        username: "Gon",
        password: "Freecs"
    }];

// created variable called newsfeed which is an array with multiple objects
var newsfeed = [{
    username: "Jacob",
    timeline: "This guy is too cool man"
}, {
    username: "Chris",
    timeline: "Having the time of his life"
}, {
    username: "Mary",
    timeline: "I hate Mondays"
}];

// created 2 variables thats value are the prompt entered by the user
var userprompt = prompt("What is your username");

var passprompt = prompt("What is your password");



// a function that determines if the prompt entered by the user
function userValid(user, pass){
    // an if statement with the condition that user and pass must equal the values 
    // one of the objects inside the array (database) 
   for(i=0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
        return true;
    }    
   }
   return false;
}



// a function that runs correctly if the user entered the correct username and password
function signIn(user, pass){
    // a conditional statement that states if the username and password are correct log 
    // the newsfeed into the console
    if (userValid(user,pass))
    // this method logs the arguments in the brackets onto the console
    console.log(newsfeed);
    else {
        // pop up window that contains the text inside the brackets
        alert("Wrong username and or password");
    }
}




// remember for the function to work you have to call it
// this can be done in the console by writing
// signIn(userprompt, passprompt);
