//call 
var person = {
    name: 'sreekanth',
    age: 19,
}
let birthday = function(years) {
    this.age += years;

}
console.log(person.age);
birthday.call(person, 5);
console.log(person.age);