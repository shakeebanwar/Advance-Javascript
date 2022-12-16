let counter = 0
function fetchingdata(){

    console.log("counter "+counter++)
}


function Debounce(call,d){
    let timer;
    return function(...args){

        if (timer) clearTimeout(timer)

        setTimeout(() => {

            call()
            
        }, d);

    }


}


const betterFunction = Debounce(fetchingdata,1000)


