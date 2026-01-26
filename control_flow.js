//if

// const score=200
// if (score>100){
//    console.log("Executed");          //if-else structure
// }
// else{
//     console.log("not exetuted"); 
// }

const balance=1000

// if(balance<500){
//     console.log("less than 500");
    
// } else if(balance<750){
//     console.log("less than 750");
    
// }else if(balance<900){
//     console.log("less than 900");
    
// }else{
//     console.log("greater than 900");
    
// }

// ******************nested if-else************************

const userloggedin=true
const debitcard=true
const loggedinfromemail=true
const loggedinfromgoggle=false

// if(userloggedin&&debitcard){
//     console.log("allow to buy course");

// }else{
//     console.log("You are not allowed");
    
// }

// if(loggedinfromemail||loggedinfromgoggle){
//     console.log("you are allowed to logged in");
    
// }else{
//     console.log("you are not allowed to logged in");
// }

// ****************Switch-case*******************

// switch (key) {
//     case value:
        
//         break;                    //structure

//     default:
//         break;
// }

//duplicate=>shift+alt+downarrow

const month=3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
}