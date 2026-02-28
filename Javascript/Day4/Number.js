/**
 * .toFixed()
 * .toPrecision()
 * .toString()
 * .ToExponentials()
 * 
 * parseInt()
 * parseFloat()
 * isNan()
 * isFinite()
 * Number()
 */


// let myNumber = 1234.456789

// console.log(typeof(myNumber.toFixed(4))) ///123.4568

// console.log(myNumber.toPrecision(4))  //1.23E3

// /// Number type to string 

// console.log(typeof(myNumber.toString()));

// console.log(myNumber.toExponential(4)); //1.xxxx

// 
// console.log(Number.parseInt(myStrNumber));

// //Number wrapper over the primitive data type i.e. number


// console.log(Number.parseFloat(myStrNumber));

//NaN : Not a Number . Whenever you are trying to perform a mathematical action on a type which is not a number.
let myStrNumber = "12345.56674567"
console.log(Number.isNaN(myStrNumber/10));

console.log(typeof(Number(myStrNumber)));
console.log(Number(myStrNumber));