//Problem Statement
//Find the minimum value in an array.

const arr = [10,20,4,5,11];
let index = arr[0];
let min = 0;
const checkMinValue = (ar) => {
    for (let i = 0; i < ar.length; i++) {
        if(index <= ar[i]) {
            // console.log(ar[i]);
            continue;
        } else {
            index = ar[i];
            min = ar[i];
        }
    }
    return min
}

const minRes = checkMinValue(arr);
console.log(minRes);