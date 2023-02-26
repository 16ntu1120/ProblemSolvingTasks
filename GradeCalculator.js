//Problem Statement
//HackerLand University has the following grading policy:
//Every student receives a grade in the inclusive range from 0 to 100.
//Any grade less than 40 is a failing grade.
//Sam is a professor at the university and likes to round each student's grade according to these rules:
//If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

const gradeCalculator = () => {
  const finalArray = [];
  const valueToDivide = 5;
  const passingValue = 40;
  let addedValue = 0;
  //   const grades = [4, 73, 67, 38, 33];
  const grades = [4, 73];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 35) {
      console.log("This grade is failing");
    } else {
      for (let j = 1; j < 3; j++) {
        if (grades[i] % valueToDivide == 0) {
          console.log("no need to round up");
          break;
        } else {
          if (addedValue < 3) {
            grades[i] = grades[i] + 1;
            addedValue++;
          }
        }
      }
    }
  }
};

gradeCalculator();
