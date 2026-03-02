/**
 * Function : reusable block of code 
 * Three ways in which function are declared
 * 1.function <functionName>(<parameters>){body}
 * 2.let <variableName> = function(<parameters>){body}
 * 3.Arrow Function = (<parameters>)=>{body}
 */

function display(){
    console.log("This is a sample function");
}

function add(a,b){
    return a+b;
}

let addThreeNumber = function(a,b,c){
    return a+b+c;
}

let addFourNumbers = (a,b,c,d)=>{
    return a+b+c+d;
}

// function fun1(fun){
//     console.log("This is fun1 function");
//     fun();
// }


// fun1(()=>{
//     console.log("its an arrow function");
// })

// setTimeout(()=>{
//     console.log("Lets execute this after some time");
// },3000);