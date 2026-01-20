const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString());
const balance1=234.2565
console.log(balance1.toFixed(2));

const value=10000000000
console.log(value.toLocaleString('en-IN'));

// ********************Math*****************
console.log(Math.abs(-4));     
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.max(2,4,56,7,3,8));
console.log(Math.min(2,4,56,7,3,8));

console.log(Math.random());   //=>provides valu between 0-1
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
