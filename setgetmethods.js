class person {
    personName;
    personAge;

    setpersonName(value) {

        if (value == null || value == undefined) {
            console.error("the null or undefined values are not accesptable");
        } else {
            if (value.length >= 30) {
                console.error("the name must be less than 30 characters");
            } else {
                this.personName = value;

            }

        }
    }




    setpersonAge(value) {

        if (value >= 0 && value <= 100) {
            this.setpersonAge = value;
        } else {
            console.log("age must be between 1 to 100");
        }
    }

    getpersonName() {
        return this.personName;
    }

} //end of the class 
var ss = new person();
ss.setpersonName(null);
ss.setpersonName(undefined);
ss.setpersonName("ssdjdkfsjfjlfjlksjfjlsdjdlklfjsdljfdsjsfdsjfjdssksjflkdsljflsdjdf");
ss.setpersonName("sree");
console.log(ss);
ss.setpersonAge(400);
ss.setpersonAge(5);
console.log(ss.getpersonName());