//callbackfunctions
function callback1(name, age) {
    console.log(` callback1: your name is ${name},and your age is ${age}`);
}

function callback2(name, age) {
    console.log(` callback2: your age is ${age},your name is ${name}`);
}

function dowork(name, age, myfunctionref) {
    name = "mr" + name;
    age++;
    myfunctionref(name, age);
}
dowork("sreekanth", "19", callback1);
dowork("valmiki ", 20, callback2);