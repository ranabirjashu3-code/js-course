// const tinderuser=new Object()    singleton object

const tinderuser={}        //non singlton object

 tinderuser.id="123abc"
 tinderuser.name="Ranbir"
 tinderuser.isloogedin=false
//  console.log(tinderuser);
 
const reguler_user={
    email:"ranabir@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ranabir",
            lastname:"Jashu"
        }
    }
}
// console.log(reguler_user.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"c",
    5:"d",
    6:"e"
}
const obj3={obj1,obj2}
// console.log(obj3);

// const obj4=Object.assign(obj1,obj2) //obj1=target,obj2=source means obj2 stored in obj1.

// const obj5=Object.assign({},obj1,obj1)  //{}=target(empty object),obj1&obj2=source means obj1 &obj2 stored in {}.
// console.log(obj4);
const obj5={...obj1,...obj2}  //spread operater
// console.log(obj5);

const data=[
    {id:"123",
     name:"Ranbir"
    },
    {
     id:"456",
     name:"Amit"
    }
]
// console.log(data[1].name);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("name"));
