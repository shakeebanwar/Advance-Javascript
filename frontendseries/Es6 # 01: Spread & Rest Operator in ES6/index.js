//ES6
// Example Rest

/*
Rest and spread dono bhot use hota ha array and object ka case ma
Rest opeartor karta ya ha ka jo numbers ap supply kar raha ho usko combine kardeta ha

*/

function add(a,b,...others){
    // ...others this is called rest operator
    console.log("others",others)
    return a + b
}

let a = add(1,3,4,5)
console.log("addition",a)


//ES5
// Example Rest

function addition(a,b,c){

    console.log("ES5",arguments)
    return a + b + c
}

let b = addition(1,2,3,4)
console.log("addition",b)



//Es6 Spread 

/*
Spread operator rest ka bilkol opposite kam karta ha rest ma combine hota tha yaha divide honga
*/

//array example

var names = ["shakeeb","shoaib","safdar"]
function getnames(name1,name2,name3){
    console.log("spread operator")
    console.log(name1,name2,name3)
}

getnames(...names)




/*
Object ka sath Rest 
Jb bi combine ki baat aye gi waha rest use honga
*/

var students = {

    name : "shakeeb",
    age:24,
    hobies: ["coding","streaming"]
}

console.log("students",students)

// object destructuring

//const {name,age,hobies} = students
//console.log("object destructuring",name,age,hobies)

// rest 

let {name,...other} = students //yaha honga ya name ki key ka ilawa baki sb combine others ma honga
console.log(name,other)


//spread

//copy one object to another and update specific key
var newstudents = {
    ...students,
    age:25
}

console.log("newstudents",newstudents)
