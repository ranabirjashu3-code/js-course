//Singleton
//object.create

//object literals

const mysym=Symbol("key1")
const jsuser={
    name: "Ranbir",
    "Full name":"Ranabir Jashu",
    [mysym]:"mykey",
    age:21,
    location:"Barasat",
    isloggedin:false,
    email:"ranabirjashu@gmail.com"
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]);
// console.log(jsuser[mysym]);

// jsuser.name="Ranabir"
// console.log(jsuser);
// Object.freeze(jsuser)       //To lock Object
// jsuser.email="Ranbir@gmail.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log(`Hello! ${this.name}`);  
}
console.log(jsuser.greeting());
