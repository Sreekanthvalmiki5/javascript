var student = {
    studentname: "sreekanth",
    marks: 75,

    getstudentname: function() {
        console.log('getstudentname', this); //studentobject


        settimeout(function() {
            console.log("getstudentname", this); //timeoutobject

        }, 2000);
        settimeout(() => {
            console.log("arrowfuncions", this); //studentobject

        }, 3000);
    }
};
student.getstudentname();