//there are two types of accessing the properties 1.dotnotation 2.bracketnotation
var student = {
    fullname: 'valmikisreekanth',
    age: 20,
    address: 'golladoddi',
    district: 'kurnool',
    state: 'andraprsdesh',
    5: 'hi sreekanth'

};
console.log(student);
console.log(student.fullname); //dot notation
console.log(student['address']); //bracket notation single quotes
console.log(student["state"]); //doublequotes
console.log(student[`district`]); //backtick
student.email = 'sreekanth@gmail.com'
console.log(student['email']);
console.log(student['5']);