class person {
    personName;
    personAge;

    set personName(value) {

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




    set personAge(value) {

        if (value >= 0 && value <= 100) {
            this.setpersonAge = value;
        } else {
            console.log("age must be between 1 to 100");
        }
    }

    get personName() {
        return this.personName;
    }

} //end of the class 
var ss = new person();

ss.personName(undefined);
ss.personName("ssdjdkfsjfjlfjlksjfjlsdjdlklfjsdljfdsjsfdsjfjdssksjflkdsljflsdjdf");
ss.personName("sree");
console.log(ss);
ss.personAge(400);
ss.personAge(5);
console.log(ss.personName());