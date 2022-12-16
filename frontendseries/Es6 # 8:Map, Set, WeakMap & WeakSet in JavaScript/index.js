//set,map,weakmap,weakset

"use strict";

//set
//it contain unique values
//Object constructor (prototype ki hi baat ho rahe ha prototype ko itself constructor bolta ha)
//set ma data key value ki form ma store nhi hota


/*

let myarray = [1,2,3,4,3]
let obj = new Set(myarray)


//using foreach
for(let new1 of obj){
    console.log(new1)
}

//using different syntax

obj.forEach((element)=>{

    console.log(element)
})




//size check
console.log(obj.size)

//add new item
obj.add(10)
console.log(obj)


//delete item
obj.delete(1)
console.log(obj)

//clear all items
obj.clear()
console.log(obj)

//check item is in set
console.log(obj.has(3))



*/




//map


/*
map -> key -> values


let myMap = new Map([["a1","shakeeb"],["a2","hassan"],["a3","safdar"]])



console.log("foreach")
for(let [key,value] of myMap){

    console.log(`key ${key} value ${value}`)
}

console.log("easy")
myMap.forEach((val,key)=>{

    console.log(`key ${key} value ${val}`)
})

// set new values
myMap.set("a4","baloch")
console.log(myMap)

//get specific

console.log(myMap.get("a1"))

//delete item
myMap.delete("a1")
console.log(myMap)


//clear
myMap.clear()
console.log(myMap)


*/





//weakset

/*
1.Isko ap iterate nhi kar sakta
2.isma ap sirf object ko store kar sakta ha
*/


/*
let ws = new WeakSet()
//agar iska prototype bi check kara tu normal set sa kam cheza ha isma
console.log(ws)

let obj1 = {"name":"shoaib"}
let obj2 = {"name":"shakeeb"}

//add 
ws.add(obj1)
ws.add(obj2)

console.log(ws)


//check object is present in array

console.log(ws.has(obj1))

*/


//weakmap

/*
1.isko bi iterate nhi kar sakta hum
2.aur ya bi sirf object pa kam karta ha weak set ki tarha
*/

let wm = new WeakMap();
console.log(wm)

var obj1 = {}
var obj2 = {}

wm.set(obj1,"public")
wm.set(obj2,"private")




console.log(wm)

