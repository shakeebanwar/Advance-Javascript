//Normal way


function addition(a){

    return function(b){
        return function(c){

            return a + b + c
        }
    }
}

let a = addition(1)
let b = a(2)
let c = b(1)

console.log(c)


//using currung supply parameter in a single line 
let d = addition(1)(2)(1)
console.log(d)



//Real life curring scenario

let userobj = {
    name : "shakeeb",
    rollno:25
}


function checkDetails(obj){

    return function(key){
        return obj[key]


    }
}

console.log(checkDetails(userobj)("name"))




//Infinite curring

function add(a){
    return function(b){
        if(b) return add(a + b)

        return a
    }
}


console.log(add(1)(2)(22)())