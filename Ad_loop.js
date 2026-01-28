// for of

// const myarr=[1,2,3,4,5]

// for (const i of myarr) {
//     console.log(i);  
// }

// const greetstring="Hello World"

// for (const i of greetstring) {
//     console.log(i);
    
// }

//Maps

const map = new Map();             //Map is unique ,it can't allow duplicate key value pair

map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('CA', 'Canada');
map.set('AU', 'Australia');
map.set('JP', 'Japan');
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ":-" ,value);
    
// }

//++++++++++++++++++++++++for in+++++++++++++++++++++++++++++++

const myobj={
    'game1':'NFS',
    'game2':'Free Fire'
}

for (const key in myobj) {
    //   console.log(key, ":-",myobj[key]);
      
}

const arr=[1,2,3,4,5]

for (const key in arr) { 
    // console.log(arr[key]);      
}

const map1=new Map()
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('CA', 'Canada');
map.set('AU', 'Australia');
map.set('JP', 'Japan');
// console.log(map);

// for (const key in map1) {
//       console.log(key);             //map is not ittarable
      
// }

//+++++++++++++++++foreach++++++++++++++++++++

const arr1=[1,2,3,4,5]

arr1.forEach(function (item){
    // console.log(item);  
})

arr1.forEach((item)=>{
    //  console.log(item);
})


arr1.forEach((item,index,arr)=>{
    //  console.log(item,index,arr);
})


const myarray=[{
    languagename:"javascript",
    languagefilename:"java"
},
{
    languagename:"python",
    languagefilename:"py"
}
]

myarray.forEach((item)=>{
    console.log(item.languagename);
    
})
