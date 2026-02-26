
/**
 * Non Primitive types
 * 1. Function
 * 2. Object
 * 3. Array
 */

// let myArray = []; // its an array. Heterogenous collections of objects.
// myArray=[1, 'anirudha',false]

// console.log(typeof(myArray));


/**
 * Three ways you declare a function
 * 
 * 1. function <functionName> (<parameters>){<body}
 * 2. let <variable> = function(<parameters>){<body>}
 * 3. Arrow Function = (<paramaters>)=>{<body>}
 * 
 * functionName() // calling of function
 */

// function display(){
//     console.log('This is a display function');
// }

// display();

// let display = function(){
//    return 'This is a string returned from Display'
// }

// console.log(display());
// console.log(typeof(display()));

// function add(a,b){
//     return a+b;
// }

// let sum = add(5,4);
// console.log(sum);
// console.log(typeof(sum));

// sum = add("Anirudha",4)
// console.log(sum);
// console.log(typeof(sum));

// let add = (a,b)=>{
//     return a+b;
// }
// console.log(typeof(add));
// let sum = add(5,4);

// console.log(sum);
// console.log(typeof(sum));

// sum = add("Anirudha",4)
// console.log(sum);
// console.log(typeof(sum));



//Object: Key-value pair
//name
//rollno
//age

let student = {
    name:"Anirudha",
    rollNo: 7,
    age: 30
}

console.log(typeof(student));
console.log(student);