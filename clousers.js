//clousers the porperties or functions cannot be accessable to outside of a function is calles clousers
//it is private variables or privatefunctions


let bankbalance = function() {
    var currentbalance = 10000;
    var deposite = function(depositeamount) {
        currentbalance = currentbalance + depositeamount;
        return `accountbalance:${currentbalance}`;

    }
    return deposite;
};
let bb = bankbalance();
console.log(bb(2200));