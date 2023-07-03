//any is good for variables not for number
/*

function getUpper(val: string){
    return val.toUpperCase()
}
*/
function add2(num: number) : number{
    return num + 2
    //return "Hello"
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{}

add2(4)
//getUpper("Nachiketa")

signUpUser("Nachiketa", "n@gmail.com", false)
loginUser("N", "N@n.com")

/*function getValie(Val: number){
    if(Val > 5){
        return true
    }
    return "200 ok"
}*/

const getHello = (s: string): string => {
    return ""
}

const hero = ["thor", "a", "w"]
//const hero = ["1", "2", "3"]

hero.map((hero): string => {
    //return 'hero is ${hero}'
    //return 2
    return 'hero is ${hero}'
})

function consoleError(errormsg: string): void{
    console.log(errormsg);
}

/*function handleError(errormsg: string): never{
    throw new Error(errormsg);
}*/

export{}

/*function getUpper(arg0: string) {
    throw new Error("Function not implemented.")
}*/
