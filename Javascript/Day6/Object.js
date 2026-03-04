/**
 * Object: which is a collection of key-value pairs
 */

let student ={
    name:"Anirudha",
    RollNo:7,
    display: function(){
        console.log("This is a display function");
    }
}

let student1={
       name:"Anirudha",
    RollNo:7,
    display: function(){
        console.log("This is a display function");
    }
}
console.log(typeof(student));
console.log(student.name);
console.log(student['name']);

student.display()
