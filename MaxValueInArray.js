//Problem Statement
//Find the maximum value in array.

const arr = [10,20,4,5,11];
let index = arr[0];
let min = 0;
const checkMinValue = (ar) => {
    for (let i = 0; i < ar.length; i++) {
        if(ar[i] >= index ) {
            index = ar[i];
            min = ar[i];
        } else {
            continue;
        }
    }
    return min
}

const minRes = checkMinValue(arr);
console.log(minRes);