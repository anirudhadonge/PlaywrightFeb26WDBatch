/**
 * modules : You shared the code between files and project. Sharing of code between files
 * 1. CommonJs:Older version of javascript we had this method of sharing code
 * 2. ESModule: ECMA 2015 they introduced ESModule
 *    Export 
 *    Import
 * 
 *  Default Export: By Default a specific module is getting exported. when ever you are exporting the module we need
 * use default with export , you can import it with any name and you need to declare it outside the {}
 * we can have only one default export in a file.
 *  Named Export: It will have only One Keyword called "export". you need to import with the same name as it has been
 * exported. A file can contain multiple named export and named export need to be imported inside {}
 */

/**
 * 
 */
//let {Student , add, EnggStudent } = require("./../Day8/Classes")
// let {Student,add,EnggStudent} = require('../Day8/Classes')
//import {Student,add} from './../Modules/Student.js'

//St---> Student 
import St,{ add, EnggStudent} from './../Day8/Classes.js'

console.log(ad(4,5));
let student1 = new St('Anirudha',7)
console.log(student1);