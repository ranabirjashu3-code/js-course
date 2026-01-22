const course={
    coursename:"Js course",
    price:"999",
    courseinstructer:"Ranbir"

}
const {courseinstructer}=course
console.log(courseinstructer);

const {courseinstructer:instructur}=course
console.log(instructur);

// {
//     "coursename":"Js course",
//     "price":"999",                     =>json format
//     "courseinstructer":"Ranbir"
// }