// JavaScript Program to Check if a Number is Float or Integer

const floatOrInteger = (number) => {
    if(typeof number === 'number' && !isNaN(number)){

        if(Number.isInteger(number)){
           return `${number} is an integer.`
        }
        else{
            return `${number} is a float.`
        }

    }
    else{
        return `${number} is not a number.`;
    }
}

const result = floatOrInteger(-5.5);

console.log(result)