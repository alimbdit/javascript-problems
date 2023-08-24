// JavaScript Program to Check Leap Year

const isLeapYear = (year) => {
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is leap year.`)
    }
    else{
        console.log(`${year} is not leap year.`)
    }
}

const year = 2004;

isLeapYear(year);