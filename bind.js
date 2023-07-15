var employee1 = {
    name: 'chandranna',
    age: 52,
    salary: 30000,
    sum: 30,
}
var employee2 = {
    name: 'sree',
    age: '20',
    salary: 20000,
    sum: 20,
}
let salarees = function(a, b, c, d) {
    this.salary += 5000;
    this.sum += a + b + c + d;

}

salarees.call(employee2, 30, 30, 45, 50);
console.log(employee2.salary);
console.log(employee2);

console.log(employee2['sum']);
let calculateemplyoeesalary = salarees.bind(employee1);
calculateemplyoeesalary(10, 20, 30, 40);
console.log(calculateemplyoeesalary());