const mythort = (fn,d)=>{
  
    
    return function(){
        document.getElementById('search').disabled = true;
        console.log('api call......')
        setTimeout(()=>{
            fn()
        },d)
    }
}

// function myfunc(){

//     mythort()

// }   

const myfunc = mythort(()=>{

    
    document.getElementById('search').disabled = false
    

},3000)



