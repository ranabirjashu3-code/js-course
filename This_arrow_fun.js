const user={
    username:"Ranbir",
    price:999,
     welcomeMessage:function (){             //tish=>It reffers current context
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
       
     }
}

// user.welcomeMessage()
// user.username="Amit"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     console.log(this);         //refers to global object(window)
// }
// one()

// ******************Arrow Function*************

const one=()=>{
    console.log(this);       //we can't use this function in arrow function
}
one()                        //inherits "this" from parent scope




const add=(num1,num2)=>{
    return num1+num2          //Arrow function declaration    
}                            // Explicit return=> When you use return
console.log(add(2,3));

//another way Arrow function declaration
const addtwonum=(num1,num2)=>( num1+num2)     //  Implecit return 

console.log(addtwonum(2,3));

const myfun=()=>({usernmae:"Ranbir"})
console.log( myfun());

//{}->must use retun & ()-> did not use return

