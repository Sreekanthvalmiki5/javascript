//functions
var claculatesimpleintrest =
    function(principle, rateofintrest, noofyears) {
        let si = (principle * rateofintrest * noofyears) / 100;
        return si;


    };
let si1 = claculatesimpleintrest(5000, 3.5, 5);
console.log(claculatesimpleintrest(2000, 5, 5));
console.log(claculatesimpleintrest(2500, 2.5, 2));
console.log(claculatesimpleintrest(5500, 5.5, 3));
console.log(si1);