/**
 * Any value enclosed in " " or ' ';
 * Properties and methods of strings
 * length : Total Number characters in the string which also includes wide spaces
 * toUpperCase()
 * toLowercase()
 * charAt() : character at a specific index
 * indexOf()
 * includes(): validation wherein you are checking whether a substring is present in the string or not.
 * slice(start, end)
 * replace()/replaceAll()
 * split();
 * trim()/trimStart()/trimEnd()
 */
/**
 * {
 * 0 - A
 * 1 - n
 * 2 - i
 * }
 */

//myName ='Hitesh';//string

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.charAt(4));
// console.log(myName.indexOf('u'));


// console.log(myName.includes('was'));

// console.log(myName.slice(4, 16));

// console.log(myName.replace(' ','&'));
// console.log(myName.replaceAll(' ','&'));

// console.log(myName.split('An',2))

let myName = " Anirudha is the tutor "; // string

console.log('&'+myName.trimEnd()+"&")
console.log('&'+myName.trimStart()+"&")
console.log('&'+myName.trim()+"&")