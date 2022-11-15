//Problem Statement
//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


const timeConverter = () => {
    const s = '02:01:45PM';
    const pmIncluded = s.includes('PM');
    const amIncluded = s.includes('AM');
    const brokenString = s.split(':');
    if(pmIncluded) {
        if(brokenString[0] < 12) {
            brokenString[0] = parseInt(brokenString[0]) + 12;
        }
        brokenString[2] = brokenString[2].replace('PM' , '');
    }
    if(amIncluded) {
        if(brokenString[0] >= 12) {
            brokenString[0] = 0 + '0';
        }
        brokenString[2] = brokenString[2].replace('AM' , ' ')
    }
    return brokenString.join(':')
    
}

const result = timeConverter();
console.log(result);