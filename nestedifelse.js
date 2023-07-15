var studentmarks = 40;
var grade;
if (studentmarks >= 35) {
    if (studentmarks >= 80) {
        grade = "A";

    } else if (studentmarks >= 60 && studentmarks < 70) {
        grade = "B";
    } else if (studentmarks >= 35 && studentmarks < 50) {
        grade = "C";
        console.log("grade");
    }
} else {
    grade = "fail";
    console.log("grade");
}