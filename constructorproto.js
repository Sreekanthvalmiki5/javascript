//inheritance using __proto__ for a constructor function


var Teacher = function(teachername) {
    this.teachername = teachername;
};
var sk = function(mainsubject) {

    this.mainsubject = mainsubject;
}
var employee = new sk("physics");
employee.__proto__ = new Teacher("sree");
console.log(employee.teachername);
console.log(employee);