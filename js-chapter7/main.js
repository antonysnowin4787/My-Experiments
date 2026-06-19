// IF Statements //

let testscore =58;
let grade;
let collegeStudent=true;
if (testscore >= 80){
    grade=`A`;
}
else if (testscore >= 70){
    grade=`B`;
}
else if (testscore >= 60){
    grade=`C`;
}
else{
    if (collegeStudent){
        grade=`REAPPEAR`;
    }
    else{
    grade=`F`;
    }
}
console.log(grade);