/*
Implementing Memorization in javascript
Memorization is a optimization technique  that can be used to reduce time consuming calculations by saving
previous input to something called cache and returning the result from it.

React ma usememo hota ha jo same kam karta ha
*/


let sum = 0
let calc = (n)=>{


    for(let i=0; i<n; i++){

        sum+=i
    }

    return sum

}

// console.time()
// console.log(calc(5))
// console.timeEnd()



//using cache technique

const memo = (calc)=>{
    let cache = {}
    return function(...arg){

       
        let n = arg[0]
        if(n in cache){

            console.log("cache")
            return cache[n]
        }

        else{
            console.log("calculations")
            let result = calc(n)
            cache[n] = result
            return result

        }
    }


}


console.time()
const efficiency = memo(calc)
console.log(efficiency(5))
console.timeEnd()


console.time()
console.log(efficiency(5))
console.timeEnd()



