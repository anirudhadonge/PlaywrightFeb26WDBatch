/**
 * if
 * else
 * nest if
 * switch
 */
/***
 * == : It compares the value only
 * === : Its compares the value and also the type 
 * &&
 * ||
 * !
 */
//if(condition){instruction}


// let flag = false;

// if(flag){
//     console.log("The flag value is true");
// }else{
//     console.log("The flag was false");
// }

let num = 2;
let myStr = 2;

// if(num === '2'){
//     console.log('The numbers are same.');
// }
/**
 * if( condition1 && condition2){some instruction}
 * if(condition1 || condtion2 ){some instruction}
 */
if(num == myStr && typeof(num)== typeof(myStr)){
    console.log('&&The numbers are same.');
}

if(num == myStr|| typeof(num)== typeof(myStr)){
    console.log('||The numbers are same.');
}