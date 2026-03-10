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
 * function in class
 * getter and setters : get <gettername>(){return value} , set <setterName>(parameters){set the value of the instance variable}
 * Inheritance
 * Polymophism : poly : many morph : form      Method overriding
 * 
 * instance variable/Methods: All the properties and method access by the instance of the class 
 * Class Variables/Methods: All the properties and method that are accessed using the class name. these are not thread safe
 */

export default class Student {
    rollNo;
    constructor(name, rollNo){
       this.name = name;
       this.rollNo = rollNo
    }

    /**
     * Getting the value of #RollNo
     */
    get getRollNo(){
      return this.rollNo;  
    }

    /**
     * Setting the value of #RollNo
     */
    set setRollNo(rollNo){
        this.rollNo = rollNo;
    }

    setMarks(marks){
        this.marks= marks
    }

    display(){
        console.log(`name is ${this.name} and rollNo is ${this.rollNo} and Marks are ${this.marks}`);
    }

}


export function add(a,b){
    return a+b;
}

// // let engStudent = new Student('Anirudha',7);
// // //let farmaStudent = new Student('Hitesh',52);

// // console.log(engStudent);

// // engStudent.setMarks(70);
// // console.log(engStudent);

// let farmaStudent = new Student('Hitest',53);
//  farmaStudent.setMarks(70);
// // console.log(farmaStudent);
// // console.log(typeof(farmaStudent));

// // farmaStudent.#rollNo = 10
// farmaStudent.name
// console.log(farmaStudent.getRollNo);
// farmaStudent.setRollNo = 20;
// console.log(farmaStudent.getRollNo);

// farmaStudent.display()


export class EnggStudent extends Student{
    static statvar;
    constructor(name, rollNo,branch){
        super(name,rollNo)//calling the constructor of the parent class
        this.branch = branch;
    }

    display(){
        console.log(`name is ${this.name} and rollNo is ${this.rollNo} and Marks are ${this.marks} and branch is ${this.branch}`);
    }

    static displayStaticVar(){
        console.log(statVar);
    }
}


// let entc = new EnggStudent('Anirudha',7,'ENTC');
// console.log(entc);
// entc.setMarks(70);
// console.log(entc);
// entc.display();

// EnggStudent.

// module.exports={Student,add, EnggStudent};

//module.exports= {Student,add};

//module.exports={add, Student,EnggStudent}