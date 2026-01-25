// iiemdiatly invoked function Expression (IIFE)


(function DB(){
    //named IIFE
    console.log("DB conected");
}) ();

(()=>{
    console.log("DB conected");   
}) ();


((name)=>{
    console.log(`Hi ${name}!`);   
}) ('Ranbir')
