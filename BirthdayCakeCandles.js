//Problem Statement
//You are in charge of the cake for a child's birthday. 
//You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


const birthdayCake = () => {
    const ar = [67,6,2,98,6,62,6,6,1,3];
    let obj = {};
    for (let i = 0; i < ar.length; i++) {
        if(!obj[ar[i]]) {
            obj[ar[i]] = 1;
        } else {
            obj[ar[i]] = obj[ar[i]] + 1;
        }
    }
    let keys = Object.keys(obj);
    return obj[keys[keys.length - 1]];
}

const result = birthdayCake();
console.log(result);