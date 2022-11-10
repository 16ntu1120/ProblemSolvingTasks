// Problem Statement
// Your functions takes an equation in the form of string and you will have to calculate the
// value of x in it.

const equation = "3x + 1 = 40";
const numberRegEx = /^[0-9]+$/;
let finalResult = 0;

const calculateVariableValue = (eq) => {
    let variableValue;
    let firstDigit;
    let secondDigit;
    let operator;
    let obj=[];
    let digitResult;
    let splittedVaraible;
    const convertedEquation = eq.split(' ');
    for(let i = 0; i < convertedEquation.length; i++) {
        if(convertedEquation[i].includes('x')) {
         variableValue = convertedEquation[i];
        }
        if(numberRegEx.test(convertedEquation[i])){
            obj.push(parseInt(convertedEquation[i]))
        }
        if(convertedEquation[i] === '+' || convertedEquation[i] === '-' || convertedEquation[i] === '*'|| convertedEquation[i] === '/') {
            operator = convertedEquation[i];
        }
    }
    if(obj.length) {
        for(let i = 0; i < obj.length; i++) {
            if(i == 0) {
                firstDigit = obj[i];
            } else {
                secondDigit = obj[i];
            }
        }
    }
    if(firstDigit > secondDigit) {
       if(operator == '+') {
           if(convertedEquation.indexOf('+') == 1) {
               digitResult = firstDigit - secondDigit;
           } else {
               digitResult = firstDigit + secondDigit;
           }
       }
    }
    if(secondDigit > firstDigit) {
         if(operator == '+') {
             if(convertedEquation.indexOf('+') == 1) {
                 digitResult = secondDigit - firstDigit;
             } else {
                  digitResult = secondDigit + firstDigit;
             }
       }
    }
    const val = splitVariableString(variableValue);
    if(numberRegEx.test(val)) {
        finalResult = digitResult / val;
        return finalResult;
    } else {
        return digitResult;
    }
}

const splitVariableString = (str) => {
    if(str.length > 1) {
        const variableSpliting = str.split("");
        for (let i = 0; i < variableSpliting.length; i++) {
            const separatingVariable = numberRegEx.test(variableSpliting[i]);
            if (separatingVariable == true) {
                return variableSpliting[i];
            } 
        }
    } else {
        return str;
    }
}


const res = calculateVariableValue(equation);
console.log(res);

 
 
 
 
 
 
 