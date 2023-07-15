class teacher {
    teachername;
    teachersubject;
    getdetails() {
        return this.teachername + this.teachersubject;
    }
    constructor() {
        this.teachername = "harshadmehta";
        this.teachersubject = "bombaystockmarket";

    }

};
class student extends teacher {
    studentname;
    studentsubject;

    constructor(studentname, studentsubject) {
        super();
        this.studentname = studentname;
        this.studentsubject = studentsubject;

    }
    getdetails() {
        return ` ${super.getdetails()},studentname:${this.studentname}, studentmainsubject:${this.studentsubject}`;
    }
}
var sa = new teacher();
console.log(sa);
console.log(sa.getdetails());
var sb = new student("sree", "bse");
console.log(sb);
console.log(sb.getdetails());