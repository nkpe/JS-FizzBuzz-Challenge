console.log('JS file working');

// TODO: Set up how many balls we want
const mainEl = document.getElementById('app');
const footerEl = document.getElementById('footer');
let width = window.innerWidth;
let height = window.innerHeight;

let windowSize = () => {
    let pEl = document.createElement('p');
    footerEl.appendChild(pEl);
    pEl.innerText = `${width}px + ${height}px`;
};

const ballCount = 100;

// TODO: Set up x and y position variable to equal an empty array
let x = [];
let y = [];

// TODO: Set up speed, size and color variable to equal an empty array
let size = [];
let xSpeed = [];
let ySpeed = [];
let r = [];
let g = [];
let b = [];

let randomNegInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min - max) + max);
};

let randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let createCanvas = (width) => {
    const canvasEl = document.createElement("canvas");
    mainEl.appendChild(canvasEl);
    canvasEl.style.height = "100%";
    canvasEl.style.width = width;
    canvasEl.style.backgroundColor = "black";
};

let setUp = () => {
    createCanvas(width);
    // TODO: Create a for loop that iterates through i until it reaches the ball count value
    // Inside the for loop:
    // TODO: Set x and y position to be the center
    // TODO: Set the speeds to be random
    // TODO: Set the size to be random
    // TODO: Set the colors to be random
    for (let i = 0; i <ballCount; i++) {
        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = randomNegInt(-5, 5);
        ySpeed[i] = randomNegInt(-5, 5);
        size[i] = randomInt(1, 10);
        r[i] = randomInt(0, 255);
        g[i] = randomInt(0, 255);
        b[i] = randomInt(0, 255);
    }

    console.log("ySpeed=" , ySpeed);
}

windowSize();
setUp();

let draw = () => {
    

    // TODO: Iterate through a new for loop to change the properties in order to animate the balls
        // Inside the for loop:
            // TODO: Increment speed for x position
            // TODO: Increment speed for y position
            // TODO: Reverse x direction if ball hits left or right sides
            // TODO: Reverse y direction if ball hits top or bottom sides
            // TODO: Set random R, G, B values
            // TODO: Style to have no strokes
            // TODO: Draw the bouncing balls
    for (let i=0; i<ballCount; i++){
        xSpeed[i] = xSpeed++;
        ySpeed[i] = ySpeed++;
        if(x===0 || x===width){
            x[i] = x--;
        } else if (y===0 || y===height){
            y[i] = y--;
        } else {
            return;
        };

        
    }

}

