//setinterval

let sree = function() {
    console.log("hi hello");
    console.log("i love u sreekanth ")
}
let sreeinterval = setInterval(sree, 1000);


let stopinterval = function() { //to clear the interval function
    clearInterval(sreeinterval);
}
setTimeout(stopinterval, 30 * 1000); //to clear  setinterval after 30secondsn