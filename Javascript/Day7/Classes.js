/**
 * Class : Template using which you will create a object
 * mould --- pore hot plastic and when the plastic solidifies --- you get a doll (physical object)
 */
/***
 * class <ClassName> {
 * }
 * constructor : is used for allocation of space for the object
 * Acess modifiers: we do not have any access modifiers
 * 
 */

/**
 * Getter and setters
 * Methods declaration
 * Inherite the Class
 * Polymorphism
 */

class Student {
    #rollNo;
    constructor(name, rollNo){
       this.name = name;
       this.#rollNo = rollNo
    }

    setMarks(marks){
        this.marks= marks
    }
}


// let engStudent = new Student('Anirudha',7);
// //let farmaStudent = new Student('Hitesh',52);

// console.log(engStudent);

// engStudent.setMarks(70);
// console.log(engStudent);

let farmaStudent = new Student('Hitest',53);
// farmaStudent.setMarks(70);
// console.log(farmaStudent);
// console.log(typeof(farmaStudent));

farmaStudent.