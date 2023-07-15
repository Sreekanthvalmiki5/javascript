//lexical enviornment the innermost object can access the outer most properties


var a = 10;
console.log(a); {
    var y = 20;

    console.log("scope of a");
    console.log(y, a); {

        var z = 23;

        console.log("scope of b");
        console.log(y, z, a);

    }
}