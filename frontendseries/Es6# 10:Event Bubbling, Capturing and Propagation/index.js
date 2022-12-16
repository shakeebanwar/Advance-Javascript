//Event bubbling & capturing
//Stop propagation,Immediate propagation & Prevent default


//Event bubbling
/*

Event bubbling ka matlab ya hota ha ka apka event child to parent propagate karaga means jb button pa click honga
tu button ka sath div ka event bi chalaga tu yaha child to parent event propagate hoa ha.

*/

/*
var div = document.querySelector('div')
var button = document.querySelector('button')

div.addEventListener('click',()=>{

    console.log("div")
})

button.addEventListener('click',()=>{

    console.log("button")
})

*/


//Event capturing

/*
isma aur event bubbling ma farak ya ha ka ya parent tu child hota ha.ya kam dakhna ko milta ha.
isko achive karna ka liya karna ya honga ka 2nd parameter ma true pass karaga .
*/


/*
var div = document.querySelector('div')
var button = document.querySelector('button')

div.addEventListener('click',()=>{

    console.log("div")
},true)

button.addEventListener('click',(event)=>{


    console.log("button")
},true)

*/



//Stop Propagation
/*
stop propagation mean agar apko apna event ko agha propagate nhi karwana for e.g agar button pa click ho tu 
div wala event na chala lakin ya sirf event bubbling ma chalaga
*/


//stopImmediatePropagation

/*
iska matlab ya ha ka agar ak button pa 3 event lagaya ha mana aur 2nd wala event pa ma stopImmediatePropagation
use karlo tu wo 3rd event pa jaye ga hi nhi
*/


var div = document.querySelector('div')
var button = document.querySelector('button')

div.addEventListener('click',()=>{

    console.log("div")
})

button.addEventListener('click',(event)=>{

    event.stopPropagation()
    console.log("button1")
})

button.addEventListener('click',(event)=>{

    event.stopImmediatePropagation()
    console.log("button2")
})



button.addEventListener('click',()=>{

    
    console.log("button3")
})



// Prevent default 

/*
Matlab ap kisi element ka bydefault behavior ko change kar sakta ha
*/


var anchor = document.querySelector('a')
anchor.addEventListener('click',(e)=>{

    e.preventDefault()
    console.log("anchor")
})