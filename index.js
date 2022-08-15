// Multiples of 3 = Fizz
// Multiples of 5 = Buzz
// Multiples of both = FizzBuzz

let numCounter = () => {
    let i;
    for (i=1; i<101 ; i++) {
        isMultiple(i);
    };
    
};

let isMultiple = (i) => {
    if (Number.isInteger(i/3) && Number.isInteger(i/5)){
        console.log("FizzBuzz");
    } else if (Number.isInteger(i/3)){
        console.log("Fizz");
    } else if (Number.isInteger){
        console.log("Buzz");
    } else {
        console.log(i);
    }
};

numCounter();