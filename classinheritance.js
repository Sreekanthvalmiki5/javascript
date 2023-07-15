 //class inheritance

 class parent {
     personname;
     personage;
     village;
     marks;
     getstudentname() {
         return console.log("yourname is sreekanth");
     };

     constructor() {
         this.personname = "sreekanth";
         this.personage = 20;
         this.village = "kurnool";
         this.marks = 50;

     }



 };
 class child extends parent {
     firstname;
     age;
     lastname;
     studentmarks;
     getfullname() {
         return this.firstname + this.lastname;
     }
     constructor() {
         super();
         this.firstname = "valmiki";
         this.lastname = "chandranna";
         this.studentmarks = 95;
         this.age = 45;

     }


 }
 var ss = new parent();
 console.log(ss);
 console.log(ss.getstudentname());
 var sc = new child();
 console.log(sc);
 console.log(sc.getfullname());