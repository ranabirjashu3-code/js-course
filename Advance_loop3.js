const arr=[1,2,3,4,5]

// const myarr=arr.map((num)=>num+10)

// console.log(myarr);


const newnum=arr
   .map((num)=>num*10)                 //chaining
   .map((num)=>num+1)
   .filter((num)=>num>=40)
// console.log(newnum);

//----------------------------------------------------------------------

//+++++++++++++++++++++++++ reduce +++++++++++++++++

const myarray=[1,2,3,4,5,6,7,8,9,10]

const i=0

const mytotal=myarray.reduce((acc,currval)=>)