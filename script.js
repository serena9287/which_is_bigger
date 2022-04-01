// initialization
let score = 0;
var diameter;
let side;
let areaOfCircle;
let areaOfSquare;

const btnNew = document.querySelector('.btn--new');
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')

//display score, message
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

//generate 2 random no. for diameter and side
function getRandomSide() {
    return side = Math.floor(Math.random() * (150) ) + 120; 
}
function getRandomDiameter() {                                   
    return diameter = Math.floor(Math.random() * (150) ) + 150;  
}

//new circle
const createNewCircle = function (){
    getRandomDiameter();
    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";
    areaOfCircle = 3.14159 * diameter * diameter / 4;
    return areaOfCircle
}

//new square
function createNewSquare(){
    getRandomSide();  
    square.style.width = side + "px";
    square.style.height = side + "px";
    areaOfSquare = side * side;
    return areaOfSquare
}


window.addEventListener('load', createNewCircle)
window.addEventListener('load', createNewSquare)

btnNew.addEventListener('click', createNewCircle)
btnNew.addEventListener('click', createNewSquare)


//correct or incorrect answer
function answerCorrectly(){
    score++;
    displayScore(score);
    displayMessage('Correct!');
    document.querySelector('.message').style.color = '#60b347'
    createNewCircle();
    createNewSquare();
}

function answerIncorrectly(){
    displayMessage('Incorrect!');
    document.querySelector('.message').style.color = '#c7365f'
    score--;
    displayScore(score);
    createNewCircle();
    createNewSquare();
}

//circle
circle.addEventListener('click', clickCircle)
function clickCircle(){
    if (areaOfCircle > areaOfSquare){
        answerCorrectly();
    } else {
        answerIncorrectly();
    }
}

//square
square.addEventListener('click', clickSquare)
function clickSquare(){
    if (areaOfSquare > areaOfCircle){
        answerCorrectly();
    } else {
        answerIncorrectly();
    }
}

function startNewGame(){
    displayMessage('');
    score = 0;
    displayScore(score);
}

btnNew.addEventListener('click', startNewGame);
