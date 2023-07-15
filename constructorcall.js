//inheritance of constructor function using call method

var Teacher = function(teachername) {
    this.teachername = teachername;
};
var sk = function(teachername, mainsubject) {
    Teacher.call(this, teachername);
    this.mainsubject = mainsubject;
}
var employee = new sk("sreekanth", "physics");
console.log(employee);