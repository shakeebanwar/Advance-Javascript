//Different types for creating object

/*
const obj1 = new Object({
    name:"shakeeb"

})

console.log("obj",obj1)




const obj3 = {
    name:"shakeeb"
}

console.log("obj",obj3)

*/




/*
1.Prototype bi ak tarika ka object hota ha jisma kuch properties wagera hota ha

2.Jb bi hum object banata ha tu uska sath bi itself kuch properties milti ha aur inhi properties ko hum
prototype bolta ha.hum ya bol sakta ha ka ya object ka prototype ha.

*/


/*
Problem statment

1.agar ma ya chao ya object1 object2 sa bi access means ma obj2.name bi kar sako.
2.Matlab ma ya cha raha ho ka mera obj2 ka andar obj1 as a prototype jaye
3.yaha per ak tarika sa prototype inheritance ho rahe ha
4.functions,array sb prototype sa hi derived ho raha ha 
*/

const obj1 = {
    name:"shakeeb",
    getName:function(){
        return this.name
    },
    getRoll:function(){

        return this.roll
    }
}

//console.log("obj",obj1)

const obj2 = {
    name:"hassan",
    roll: 25,
    __proto__:obj1
}


//console.log("obj2",obj2.name,"complete",obj2)

//console.log(obj2.getName())
//console.log(obj2.getRoll()) //agar ma obj1 sa isko direct call karta tu undefined ata lakin mana obj2 sa call kiya isliya undefined nhi aya



const obj3 = {
    class:"MCA",
    __proto__:obj2
}

//console.log("obj3",obj3,"Function",obj3.getRoll())



//Array examples

/*
1.Array ka bi prototype hota ha aur un ka andar huma array sa related function wagera milta ha jasa 
slice,reverse etc

*/

const array1 = ["shakeeb"]
console.log(array1)


//agr ma ya chao ka ma array ya object ka prototype dakho

const ob1 = {}
console.log(ob1)


const array2 = []
console.log(array2)


//agr ma array ka prototype ma koi property ya function ko add karna chao
Array.prototype.show = function(){
    return this
}
const cities = ["karachi","lahore"]
console.log(cities.show())

//prototype ma asi property ko add karna ha jisko call karo tu array object ban jaye

Array.prototype.convertobj = function(){

    let obj = {}
    this.forEach(element=>{
        obj[element] =element
    })

    return obj
}


console.log(cities.convertobj())




/*
correct syntax for creating a prototype
upar humna ak object ka prototype dosra ma inherit kar ka use kiya tha  necha bi same asa hi hoa ha waha 
humna __proto__ isko use kiya tha yaha per humna prototype ko use kiya ha

*/
function Myprototype(name,roll){

    this.name = name,
    this.roll = roll
}

//ak sa zada prototype bi add kar sakta ha

Myprototype.prototype = obj1
Myprototype.prototype = obj3



//ya constructor style ma function call kiya ha
const myproto = new Myprototype("shakeeb",45)
console.log(myproto.getRoll())
console.log(myproto.class)