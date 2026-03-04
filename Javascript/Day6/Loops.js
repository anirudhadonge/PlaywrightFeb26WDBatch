/**
 * 1. For Loop
 * 2. While Loop
 * 3. Do while Loop
 * 4. For in
 * 5. For of
 */

//While Loop

// while(condition){ // The condition is validated first then the instruction is executed
        //action
// }
// do{
//   instruction 
// }while(condition)

// let num = 10
// console.log('While Loop is getting executed');
// while(num<10){
//     console.log(num);
//     num++;
// }

// console.log('Do While Loop is getting executed');
// do{
// console.log(num);
// num++;
// }while(num<10);


/**
 * for in // it take the key of the items then for some action or instruction
 * for of
 */


let fruits = ['Apple','Banana','Orange','Mango','Kiwi'];
/**
 * for(let var in item){ //
 * instruction
 * }
 */

// for(let index in fruits){
//     console.log(fruits[index]);
// }

// let student ={
//     name:"Anirudha",
//     RollNo:7,
//     display: function(){
//         console.log("This is a display function");
//     }
// }

// for (let key in student){
//     console.log(`${key} is key and its value ${student[key]}`);
// }

for (let value of fruits){
    console.log(value);
}