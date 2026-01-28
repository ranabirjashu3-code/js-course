//++++++++++++++++++filter++++++++++++++++++++++++

const mynum=[1,2,3,4,5]

// const newnum= mynum.filter((num)=>{
//      return num > 4
//     })
// console.log(newnum);


const newnum=[]

mynum.forEach((num)=>{
    if(num>4){
        newnum.push(num)   
    }
})

// console.log(newnum);


const books = [
  { title: 'Book Five',  genre: 'Science',      publish: 2009, edition: 2014 },
  { title: 'Book Six',   genre: 'Fiction',      publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History',      publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science',      publish: 2011, edition: 2016 },
  { title: 'Book Nine',  genre: 'Non-Fiction',  publish: 1981, edition: 1989 }
];

const bookuser=books.filter((bk)=>{
        return bk.genre=='Science'
})

// console.log(bookuser);

const bookuser1=books.filter((bk)=>{
        return bk.publish>=2000
})

// console.log(bookuser1);

const bookuser2=books.filter((bk)=> bk.publish>=1985 && bk.genre=='History')

console.log(bookuser2);


