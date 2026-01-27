//******************for structure********************

// for (let i = 0; i <=10; i++) {
//     const element=i;
//     console.log(element);    
// }

//-----------------------------------------------------------------

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is best number.");
//     }
//     console.log(element);     
// }

//--------------------------------------------------------------

// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);   
//     }
// }

//-------------------------------------------------------

// let array=[1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


//*****************break & continue*********************

// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//     console.log("5 detected");
//     break
//     }
//     console.log(i);  
// }

//----------------------------------------

for (let i = 0; i <= 10; i++) {
    if(i==5){
    console.log("5 detected");
    continue
    }
    console.log(i);  
}
