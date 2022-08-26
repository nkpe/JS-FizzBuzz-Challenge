console.log('JS file working');

// TODO: Set up how many balls we want
const mainEl = document.getElementById('app');
let width = window.innerWidth;
let height = window.innerHeight;

let windowSize = () => {
    let pEl = document.createElement('p');
    mainEl.appendChild(pEl);
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

let random = (min, max) => {
    min = Math.ceil(min);
    console.log(min);
    max = Math.floor(max);
    console.log(max);
    return Math.floor(Math.random() * (max - min) + max);
}

let createCanvas = () => {
    const canvasEl = document.createElement("canvas");
    mainEl.appendChild(canvasEl);
    canvasEl.style.height = height;
    canvasEl.style.width = width;
};

let setUp = () => {

    // TODO: Create a for loop that iterates through i until it reaches the ball count value
    // Inside the for loop:
    // TODO: Set x and y position to be the center
    // TODO: Set the speeds to be random
    // TODO: Set the size to be random
    // TODO: Set the colors to be random
    for (let i = 0; i <= ballCount; i++) {
        x[i] = width / 2;
        y[i] = height / 2;
        xSpeed[i] = random(-5, 5);
        ySpeed[i] = random(-5, 5);
    }
    console.log(`x , y , xSpeed , ySpeed`, x, y, xSpeed, ySpeed);


}

windowSize();
createCanvas();
setUp();





function setup() {
    createCanvas(windowWidth, windowHeight);





}

function draw() {
    background(0, 50);

    // TODO: Iterate through a new for loop to change the properties in order to animate the balls

    // Inside the for loop:
    // TODO: Increment speed for x position

    // TODO: Increment speed for y position


    // TODO: Reverse x direction if ball hits left or right sides


    // TODO: Reverse y direction if ball hits top or bottom sides


    // TODO: Set random R, G, B values


    // TODO: Style to have no strokes


    // TODO: Draw the bouncing balls


}

