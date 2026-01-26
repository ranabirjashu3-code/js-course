const useremail="ranbir@gmail.com"
if(useremail){
    console.log("got user email");
    
}else{
    console.log("Don't have user email");
    
}

// falsy values

// false,0,-0,BigInt 0n,"",null, undefined,NaN

//truthy values

//"0", "false", " ", [], {}, function(){}

const emptyarr=[]
if (emptyarr.length===0){
    console.log("Empty Array");  
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Empty Object");
}

//Nullish Coalescing operator (??): null undefined

let val1;
// val1=5??10

// val1=null??10

// val1=undefined??10

val1=null??10??12
console.log(val1);

//Ternary Opertaor

// conditon ? true :false

const teaprice=100
teaprice<=80 ? console.log("less than 80"): console.log("more than 80");


