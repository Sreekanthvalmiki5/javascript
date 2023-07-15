class Student {//class has properties and methods
    studentname;
    studentid;
    studentdetails;
    studentfullname() {

        return this.studentname + this.studentdetails;
    };

}
var student1 = new Student();//student has same properties and methods of the class student
student1.studentname = "sreekanth";
student1.studentid = "21125a0261";
student1.studentdetails = "kurnool";
student1.studentfullname();
console.log(student1);
var student2 = new Student();
student2.studentname = "kavitha";
student2.studentid = "12345";
student2.studentdetails = "hyderabad";
student2.studentfullname();
console.log(student2);
var student3 = new Student();
console.log(student3);