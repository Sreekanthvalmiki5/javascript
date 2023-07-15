//arrow functions has no effect in the dynamic contexts such as promise settimeout settimeinterval 

//the object of this keyword changes in the regualar functions and the object of the this keyword is a empty object in the arrowfunctions
//in arrowfunctions this keyword is gobal emptyobject
var student = {
    studentname: 'valmiki',

    getstudentname: function() {
        settimeout(function() {
            console.log(this);
        }, 3000);
    }
};

student.getstudentname();

setTimeout(student.getstudentname.bind(student), 5000);