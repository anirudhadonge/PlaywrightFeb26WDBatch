/**
 * Hetrogenous collection of Items
 * length: its property which return the total number of items in the array
 * push(): It will add the item at the end of the array
 * pop(): it removed the last element of the array
 * shift()
 * unshift();
 * indexOf();
 * includes();
 * Join();
 * slice();
 * splice();
 * 
 * Iterating the array
 * ForEach
 * Map
 * Filter
 */


// let myArray= [1,'anirudha',false];
// console.log(myArray[0])
// console.log(myArray.length);
//'Apple','Banana','Orange','Mango','Kiwi'

// // console.log(fruits);
// fruits.push('Apple');
// // console.log(fruits);
// fruits.push('Banana');
// // console.log(fruits);
// fruits.push('Orange');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.unshift('Apple');
// // console.log(fruits);
// fruits.unshift('Banana');
// // console.log(fruits);
// fruits.unshift('Orange');
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
/**
 * {
 * 0 - Apple
 * 1 - Banana
 * 2 - Orange
 * }
 */
// console.log(fruits.indexOf('Banana'));
let fruits = ['Apple','Banana','Orange','Mango','Kiwi'];
//java - streams
//C# - Linq
//console.log(fruits.includes('Kiwi1'));
// console.log(fruits.join('-'));

// let subFruits = fruits.slice(1,4);
// console.log(subFruits);

console.log(fruits.splice(2,2,'Grapes','Guava'));
console.log(fruits);