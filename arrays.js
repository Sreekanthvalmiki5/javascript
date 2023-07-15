var prices = [20, 80, 200, 500, 550];
prices[0] = 50;
console.log(prices);
console.log(prices.length);
console.log("using for loop");
for (var i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}


var students = [
    { studentname: "sree", studentage: 20 },
    { studentname: "sai", studentage: 10 },
    { studentname: "badri", studentage: 20 },
    { studentname: "madhu", studentage: 20 },

]
console.log(students.length);
console.log("using for loop");
for (var s = 0; s < students.length; s++) {
    console.log(`studentname:${students[s].studentname},age:${students[s].studentage}`);
}