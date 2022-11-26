/*
jb tk ya code execute nhi hota isko javascript global execution context ma jagha daga.uska baad call stack
ma push karaga phr waha sa pop aur push wagera hota ha

*/


b() // ya function call hojaye ga q ka ya phala initialize honga memory ma then call hota isko hi hoisting bolta ha
//c() //yaha per reference error aye ga q ka isko humna arrow function banaya tu wo isko as a variable treat karaga
console.log(a) //yaha initial ma undefined aye ga q ka initial ma jb ya banata ha tu iska placeholder undifined deta phr baad ma is placeholder ko actual value sa replace karaga
var a = 5;

function b(){
    console.log("b.................")
}


const c =()=>{

    console.log("c..............")
}

c()
console.log(a)



