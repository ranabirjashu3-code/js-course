function calculatecartprice(...num1){           //...=>rest operator
    return num1
}
console.log(calculatecartprice(200,300,400));

const user={
    username:"Ranbir",
    price:999
}

function handleobject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
 }
//  handleobject(user)
handleobject({
    username:"Amit",
    price:199
})

const myarr=[100,200,300,400]

function secondvalue(anyarray){
    return anyarray[1]
}

console.log(secondvalue(myarr));
