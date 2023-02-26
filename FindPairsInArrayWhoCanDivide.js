// Problem Statement
// Question 1: Find all the divisible pairs in the given array by a given integer. i.e
// For example, the following array contains 5 elements = [1, 2, 3, 4, 5, 6]. Let's say the divisor integer is 5 then all the pairs will be,

// Output:
// [1, 4] [2, 3] [4, 6]
//1+4/5 = 1 //2+3/5 = 1 //4+6/5 = 2

const array = [1, 2, 3, 4, 5, 6];

const divisor = 5;

const FindAllDivisiblePairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum % divisor == 0) {
        console.log(
          "Pairs for which the sum is completed divided",
          arr[i],
          arr[j]
        );
      }
    }
  }
};

FindAllDivisiblePairs(array);
