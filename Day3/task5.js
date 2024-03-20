function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
var year = 2024;
if (isLeapYear(year)) {
    console.log("Leap year:"+year);
} else {
    console.log("Not a leap year:"+year);
}



//Grade calculation

function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const score = 75;
const grade = calculateGrade(score);
console.log(grade);