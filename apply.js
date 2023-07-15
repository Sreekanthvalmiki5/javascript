//apply is the same as the call but the parameters are provides as an array in the apply 
var employee = {
    name: 'chandranna',
    age: 52,
    salary: 30000,
    sum: 30,
}
let salarees = function(a, b, c, d) {
    this.salary += 5000;
    this.sum += a + b + c + d;

}
console.log(employee.salary);
salarees.apply(employee, [10, 20, 30, 40]);
console.log(employee.salary);


console.log(employee['salary']);
console.log(employee.sum);