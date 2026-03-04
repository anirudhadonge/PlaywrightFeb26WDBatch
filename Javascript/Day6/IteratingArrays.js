/**
 * For loop
 * Foreach
 * Map
 * Filter
 */

let fruits = ['Apple','Banana','Orange','Mango','Kiwi'];
let myNumber = [3,52,6,4,100,120,65,34];
// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

fruits.forEach((value,index)=>{
console.log(`${value} is at ${index}`);
})

let newArray = fruits.map((value,index)=>{
    return value+"!"+index
})

console.log(newArray);

let filteredNumbers = myNumber.filter((value)=>{
    return 6<value && value<60;
})

console.log(filteredNumbers);