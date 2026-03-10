/**
 * Asynchronus : The script does wait for the task to complete.
 * 1. Chaining of Function leads callback hell
 * 2. Promise:
 *    Then : called when promise is fullfilled
 *    catch: called when the promise is reject
 * 3. Async Await
 */
let flag = false;
async function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(flag){
        console.log("This is function 1");
        resolve("success");
        }else{
            reject("Function reject")
        }
    }, 6000);
  });
}

async function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function 2");
      resolve("success");
    }, 1000);
  });
}

// function fun3() {
//   setTimeout(() => {
//     console.log("This is function 3");
//   }, 500);
// }
// fun1()
// fun2()

// fun1().then((value)=>{
//     console.log(value);
//     fun2().then((value)=>{
//         fun3()
//     });
// }).catch((value)=>{
//     console.log(value)
// })

await fun1();
await fun2();
