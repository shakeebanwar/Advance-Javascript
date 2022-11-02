//High order function

//foreach
//filter
//map
//sort
//reduce

const companies = [

    {name : "Google",category:"Product Base",start:1981,end:2004},
    {name : "Amazon",category:"Product Base",start:1992,end:2004},
    {name : "paytm",category:"Product Base",start:1999,end:2007},
    {name : "Conforge",category:"Service Base",start:1989,end:2004},
    {name : "Mindtree",category:"Product Base",start:1980,end:2010},
]


const ages = [33,12,28,16,44,61,25,32,15,13]

//forEach

/*

Normal way

for(let i=0;i<companies.length;i++){

    console.log(companies[i].name)
}

*/


/*
for each with normal function

companies.forEach(function(company,index){

    console.log(company.name)

})
*/


/*
foreach with arrow function
companies.forEach((company)=>{

    console.log(company.name)
})

*/

/*
foreach with arrow function in a singal line

companies.forEach((companies)=>(console.log(companies.name)))


*/




//filter

/*
normal way

for(let i =0;i<=ages.length;i++){

    if(ages[i] >=20){
        console.log(ages[i])
    }
}

*/

/*

filter with nomal function

const age = ages.filter(function(age){
    if(age >= 20){
        return true
    }

})


console.log(age)

*/



/*
filter with arrow function

const finalages = ages.filter(age=> age >30)
console.log(finalages)

*/


/*
filter with object 

const sb = companies.filter(function(company){

    if(company.category == "Service Base"){

        return true
    }
})

console.log(sb)

*/



/*
shorter way

const sb = companies.filter(company => company.category == "Service Base")

console.log(sb)


*/



//map function

/*
const dummy = companies.map((company,index)=>{

    return `${company.name} ${company.category}`
})

console.log(dummy)

*/


//sort



/*

Assending and desending order

const sorted = companies.sort(function(c1,c2){

    if(c1.start > c2.start){
        return 1
    }
    else{
        return -1
    }


})

console.log(sorted)

*/



/*
shorter version

const sorted = companies.sort((c1,c2)=> c1.start > c2.start ? 1 : -1)
console.log(sorted)

*/


/*
Array implementation

//const sortedages = ages.sort((a,b)=> a-b ) for assending

//const sortedages = ages.sort((a,b)=> b - a) for desending
console.log(sortedages)

*/


//Reduce 
/*

Normal version
let total = 0
for(let i=0;i< ages.length;i++) {

    total+= ages[i]
}

console.log(total)

*/

/*
using reduce

const sumage1 = ages.reduce((totals,age)=> totals + age) //0 is athe initial value
console.log(sumage1)

*/