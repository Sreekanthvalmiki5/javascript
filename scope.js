//scope of variables
console.log("before the global variables");
console.log(a); //the var variable can be hoisted up 
// console.log(b); not accessable the let variables cannot be hoisted up
var a = 10; //global variables
let b = 20; //global variables
console.log("after the global variables");
console.log(a);
console.log(b);
let sreefunction = function() {
    console.log("before the localvariables");
    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(d); not accessable

    var c = 30 //local variable with in the end of the function  it can be hoisted up
    let d = 40 //local variable with in the end of the function
    console.log("after the local variables");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); //accessable
    if (c == c) {
        console.log("before the blocklevel variables");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        // console.log(f); not accessable

        var e = 50; //local variable end of the function...can hoisted up
        let f = 60; //block level variable the let variable cannot be hoisted up
        console.log("after the blocklevel variables")
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f); //accessable
    }
    console.log("after the block")
    console.log(e); //can be accessable after the block
    // console.log(f); //cannot be accessable after the block

}

console.log("after the function");
console.log(a);
console.log(b);
//console.log(c); cannot be accessable
//console.log(d); cannot be accessable
sreefunction();