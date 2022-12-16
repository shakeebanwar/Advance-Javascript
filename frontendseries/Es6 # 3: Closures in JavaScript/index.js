//Closures


/*
Anonymous function: 
    means function without name

*/

//Example 1


/*
var sum = function(a){
    console.log("live viewers ",a)
    var c = 4
    return function(b){
        return a + b + c
    }
}

var store = sum(200)
console.log(store(5))

*/


/* 
In simple words closure ka matlab ya ha ka ak bar jb function call ho tu value loss nhi hoti retain rahti ha

yaha hoa ya ha ka sum function ka call pa jo a ka andar value ha wo retain ya baki rahagi aur wohi value
hum jo return function ho raha ha usko bi pass kar sakta ha

ya sirf javascript ma ha ka value retain rahe warna python wagera ma ya value retain nhi rahti
*/


//Example # 2:
 
var sum = function(a,b,c){

    return{

        two:function(){
            return a + b;
        },
        three:function(){
            return a + b + c;
        }
    }
}

var store = sum(1,2,3)
console.log(store.two())
console.log(store.three())