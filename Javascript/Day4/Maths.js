/**
 * Math functions 
 * round() // Round of a number to the nearest integer 
 * floor() // Get the nearest interger value less than the number 
 * ceil()
 * random() 
 * trunc()
 */

let myNum =12.5566;  //12- 12.5566 - 13

// console.log(Math.round(myNum));
// console.log(Math.floor(myNum));
// console.log(Math.ceil(myNum));
// console.log(Math.trunc(myNum)); // 12.5566 ---- 12

//console.log(Math.random()); // 0-1

//100 -- 1

let min =1
let max = 100

console.log(Math.ceil(Math.random()*(max-min)+min)); ///0.0001 *100 = 0.1  .999 *100 = 99.9+1 = 101