//syntax
//Typescript is smart enough to detect type so no need to write number, tec again anad again
let greetings: string = "Hello World!"; //declare variable
//let mynum = 6
greetings.toLowerCase()
//Doesnt allow greetings = 6 
console.log(greetings);

//number
let userID: number = 420 //same for 420.35

// dot shows what we can do userID.
let userID2 = 334
userID2.toFixed()
//userID2 = "Nachiketa"

let isLoggedIn: boolean = false

// not much in boolean isLoggedIn.

//any
let hero;
//let hero: string;
function gethero(){
    return "Mega"
}

hero = gethero()

export{} //eliminate error in declaring string temporarily