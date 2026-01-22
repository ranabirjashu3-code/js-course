function saymyname(){
    console.log("Ranbir");
}
// saymyname()
// function add(a,b){             //a,b=>parameter
//     console.log(a+b);
//     }
// add(3,7)                       //3,7=>argument

function add(a,b){             
    // let result=a+b;
    // return result
    return a+b
    }
const a= add(3,7)
// console.log(`Result:${a}`);

function loginusermessage(username){
    if(username==undefined){
       console.log("please enter username!");
       return 
    } 
    return `${username},just logged in`
}
console.log( loginusermessage());
 