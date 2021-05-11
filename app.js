// Establishing global variable for play
let playerScore = 0;

// Creating variables to use for event listeners and choices
const qCard = document.querySelector('#qCard');
const qText = document.querySelector('#qText');
const scoreBoard = document.querySelector('.scoreBoard');
const choice1 = document.querySelector('#choice_1');
const choice2 = document.querySelector('#choice_2');
const choice3 = document.querySelector('#choice_3');
const choice4 = document.querySelector('#choice_4');

const testing = {
    one: 100,
    two: 'question',
    three: ['test1', 'test2', 'test3', 'test4']
};

const movies = {
    100: {
        value: 100,
        question: 'This was the first movie to gross over $1 billion at the Box Office.',
        answers: ['Titanic', 'Jurassic Park', 'Star Wars: The Phantom Menace', 'The Lord of the Rings: Return of the King'],
    }, 
    200: {
        value: 200,
        question: 'Due to his dramatic weight gain to play the role, this Batman actor was called "Fatman" by many on the set.',
        answers: ['Christian Bale', 'Michael Keaton', 'Adam West', 'George Clooney']
    },
    300: {
        value: 300,
        question: 'This film out of South Korea became the first Oscar winner for Best Picture.',
        answers: ['Parasite', 'A Taxi Driver', 'The Age of Shadows', 'Burning']
    },
    400: {
        value: 400,
        question: 'Famed and award winning actor Paul Newman made his final theatrical appearance in this Same Mendes film.',
        answers: ['Road to Perdition', 'American Beauty', 'Twilight', 'Where the Money Is']
    },
    500: {
        value: 500,
        question: 'The PG-13 film rating was created in response to outrage over scenes depicted in this 80s film.',
        answers: ['Indiana Jones and the Temple of Doom', 'Red Dawn', 'Escape From New York', 'Gremlins']
    }
};

/* This function displays the modal card with question and answer choices when a category and value has been selected.  It turns on the modal view, then injects the text of the question and builds a temporary array for the answers so they can be randomized while maintaining original syntax. */
const showQuestion = () => {
    qCard.style.display = 'block';
    qText.innerText = testing.two;
    let randAnswerArray = [];
    let tempArray = [testing.three[0], testing.three[1], testing.three[2], testing.three[3]];
    for (let i = 0; i < 4; i ++) {
        let randChoice = Math.floor(Math.random() * tempArray.length);
        randAnswerArray.push(tempArray[randChoice]);
        tempArray.splice(randChoice, 1);
    }
    choice1.innerText = randAnswerArray[0];
    choice2.innerText = randAnswerArray[1];
    choice3.innerText = randAnswerArray[2];
    choice4.innerText = randAnswerArray[3];
}

/* Turns the modal card back off to redisplay the game board */
const answerQuestion = (e) => {
    qCard.style.display = 'none';
    console.log(testing.three[0])
    if (e.currentTarget.innerText === testing.three[0]) {
        playerScore += testing.one
    }
    
    updateScore();
}

// Function updates player score on board screen
const updateScore = () => {
    scoreBoard.innerText = 'Current Score: ' + playerScore;
}

/* Creates an event listener on all question spaces of the board that will activate the showQuestion funciton */
document.querySelectorAll('.qButtons').forEach(question => question.addEventListener('click', showQuestion));

/* Creates event listener on the answer choices for answering the questions */
document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));