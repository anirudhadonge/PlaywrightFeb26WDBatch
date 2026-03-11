//you need to reverse a number


/**
 * Write a function which takes number a parameter and returns a reverse number
 * e.g 123456789 ---> 987654321
 * you will not be using strings and its inbuild fuction 
 * you need to consider input as a number then reverse it.
 * % reminder operator will be 
 * while loop * 
 */

let myNumber = 12345678;

let reverseNumber=0;

while(myNumber>0){
    reverseNumber = reverseNumber*10 + (myNumber%10); // 0 = 0*10+8 = 8;
    console.log(reverseNumber);
    myNumber = Math.floor(myNumber/10); // 1234567.8 = 1234567
    console.log(myNumber);
}

console.log(reverseNumber);