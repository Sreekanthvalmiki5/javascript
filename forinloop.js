var student = {
        firstname: 'valmiki',
        lastname: 'sreekanth',
        email: 'sreekanth@gmail.com',
        phsics: 70,
        chemisty: 80,
        maths: 90,
    }
    //by using dot accessor 
console.log(student.firstname);
console.log(student.lastname);
console.log(student.email);
//by using bracket accessor
console.log(student['firstname']);
console.log(student['lastname']);
console.log(student['email']);
//by using for in loop
for (let pro in student) {
    console.log(pro, student[pro]);
    if (pro == 'phsics' || pro == 'chemistry' || pro == "maths") {
        student[pro] += 10;

    }
}
console.log(student);