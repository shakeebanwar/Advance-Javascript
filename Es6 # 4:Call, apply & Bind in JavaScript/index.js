// Apply,call & Bind in js
/*
this keyword is used for self referencing
*/


//call

let userDetails  = {
    name : "shakeeb",
    roll : 25,
    age : 26,
    printDetails:function(){

        console.log(this) //abhi ya this is object ko point kar raha ha
    }
}

userDetails.printDetails()


let userDetails2 = {

    name : "safdar",
    roll:45,
    age:56
}


//function borrowing
userDetails.printDetails.call(userDetails2)

/*
yaha ho ya raha ha ka by defualt userDetails apna object ko point kar raha ha lakin agr ma ya chao ka 
userDetails2 ko point kara tu waha call use honga
*/


//for independent function

let printuser = function(country = "pakistan"){

    console.log("name is ",this.name," country is ",country)
}

//agr ma ya chao ka printuser function kisi specific object ko point karaa.

//printuser.call(userDetails)

//for arguments passing

printuser.call(userDetails,"turkey")


//apply
printuser.apply(userDetails,["usa"])

/*
call and apply ma farak ya ha apply ma arguments as a list pass honga
*/

//Bind

/*
Bind karta ya ha ka apka function ki ak copy bandeta aur phr ap usko jb chao call kar sakta ho aur isnma ap 
arguments list bi pass kar sakta ho aur normal bi.
*/

let newfunc = printuser.bind(userDetails,"turkey")
newfunc()