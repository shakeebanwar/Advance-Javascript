//Asyn js programming
//callbacks,promises,Asyn & await



//Problem statment

/*
yaha ho ya raha ha ka jb createdata 2 sec ka baad chalta tu dom ma 3rd wala update nhi hota

const datas = [{"name":"shakeeb","profession":"CS"},{"name":"Safdar","profession":"CS"}]

function getDatas(){

    setTimeout(() => {

        let output = ""
        datas.forEach((data,index)=>{

            output += `<li>${data.name}</li>`
        })

        document.body.innerHTML =output


        
    }, 1000);
}

getDatas(datas)



function createdata(newdata){
    
    setTimeout(()=>{
        datas.push(newdata)

    },2000)
}

createdata({"name":"jawad","profession":"frontend"})

*/




//problem solving using callbacks


/*

const datas = [{"name":"shakeeb","profession":"CS"},{"name":"Safdar","profession":"CS"}]

function getDatas(){

    setTimeout(() => {

        let output = ""
        datas.forEach((data,index)=>{

            output += `<li>${data.name}</li>`
        })

        document.body.innerHTML =output


        
    }, 1000);
}





function createdata(newdata){
    
    setTimeout(()=>{
        datas.push(newdata)
        getDatas()

    },2000)
}

createdata({"name":"jawad","profession":"frontend"},getDatas)

*/



// problem solving using promises


/*

const datas = [{"name":"shakeeb","profession":"CS"},{"name":"Safdar","profession":"CS"}]

function getDatas(){

    setTimeout(() => {

        let output = ""
        datas.forEach((data,index)=>{

            output += `<li>${data.name}</li>`
        })

        document.body.innerHTML =output


        
    }, 1000);
}





function createdata(newdata){

    return new Promise((resolve,reject)=>{

            
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve()
        }
        else{

            reject("kuch locha ha")
        }





        datas.push(newdata)
        getDatas()

    },2000)


    })

}

createdata({"name":"jawad","profession":"frontend"}).then(getDatas).catch(e=> console.log("error",e))


*/


//problem solving using  async/await

/*
Async and synchronous ma farak ya ha ka async ma sequence decide nhi hoti jb ka synchronous ma sequence decide hoti ha

*/





async function start(){
    await createdata({"name":"jawad","profession":"frontend"})
    getDatas()
    
}

start()

const datas = [{"name":"shakeeb","profession":"CS"},{"name":"Safdar","profession":"CS"}]

function getDatas(){

    setTimeout(() => {

        let output = ""
        datas.forEach((data,index)=>{

            output += `<li>${data.name}</li>`
        })

        document.body.innerHTML =output


        
    }, 1000);
}


function createdata(newdata){

    return new Promise((resolve,reject)=>{

            
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve()
        }
        else{

            reject("kuch locha ha")
        }





        datas.push(newdata)
        getDatas()

    },2000)


    })

}



