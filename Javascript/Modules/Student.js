


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

function add(a,b){
    return a+b;
}
module.exports= {Student,add};

