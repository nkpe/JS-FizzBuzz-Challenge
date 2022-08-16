// Multiples of 3 = Fizz
// Multiples of 5 = Buzz
// Multiples of both = FizzBuzz

const Body = document.getElementById("main-body");
let content;
let p = document.createElement("p");
Body.appendChild(p);

let i;

let isMultiple = (i) => {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        content = "FizzBuzz";
    } else if (Number.isInteger(i / 3)) {
        content = "Fizz";
    } else if (Number.isInteger(i / 5)) {
        content = "Buzz";
    } else {
        content = i;
    }
};

let printToPage = () => {
    console.log(content);
    p.textContent += ((i<100) ? `${content} , ` : content);
}


let numCounter = () => {
    for (i = 1; i < 101; i++) {
        isMultiple(i);
        printToPage();
    };

};

numCounter();


