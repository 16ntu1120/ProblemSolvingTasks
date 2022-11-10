//Problem Statement
//Take any string in your function as a parameter. That string can have anything special characters or
//spaces. Convert that string into camelCase Variable.

const str = 'CAt *AND/ dogs /bark';
const specialCharacterRegEx =/[\,\/\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

const camelCaseConversion = (stringValue) => {
    const arrayWithElementsWithoutSpecialCharacter = [];
    const stringToArray = stringValue.split(' ');
    for (let i = 0; i < stringToArray.length; i++) {
       if(specialCharacterRegEx.test(stringToArray[i])) {
           const val = stringToArray[i].replace(specialCharacterRegEx , '');
           arrayWithElementsWithoutSpecialCharacter.push(val);
       } else {
           arrayWithElementsWithoutSpecialCharacter.push(stringToArray[i]);
       } 
    }
    
    if(arrayWithElementsWithoutSpecialCharacter.length) {
         for (let i = 0; i < arrayWithElementsWithoutSpecialCharacter.length; i++) {
             if(i == 0) {
                     const small = arrayWithElementsWithoutSpecialCharacter[i].charAt(0).toLowerCase() + arrayWithElementsWithoutSpecialCharacter[i].slice(1).toLowerCase();
                    arrayWithElementsWithoutSpecialCharacter[i] = small;   
             } else {
                     const capital = arrayWithElementsWithoutSpecialCharacter[i].charAt(0).toUpperCase() + arrayWithElementsWithoutSpecialCharacter[i].slice(1).toLowerCase();
                    arrayWithElementsWithoutSpecialCharacter[i] = capital;
             }
         }
    }
    const res = arrayWithElementsWithoutSpecialCharacter.join();
    const resFinal = res.replace(specialCharacterRegEx , '');
    console.log(resFinal);
}


camelCaseConversion(str);
