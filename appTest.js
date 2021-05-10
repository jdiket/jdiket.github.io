let playerScore = 0;

const qCard = document.querySelector('#qCard');
const qText = document.querySelector('#qText');
const choice1 = document.querySelector('#choice_1');
const choice2 = document.querySelector('#choice_2');
const choice3 = document.querySelector('#choice_3');
const choice4 = document.querySelector('#choice_4');

const testing = {
    one: 100,
    two: 'question',
    three: ['test1', 'test2', 'test3', 'test4']
};

const showQuestion = () => {
    qCard.style.display = 'block';
    qText.innerText = testing.two;
    choice1.innerText = testing.three[0];
    choice2.innerText = testing.three[1];
    choice3.innerText = testing.three[2];
    choice4.innerText = testing.three[3];
}

const answerQuestion = () => {
    console.log('choice made');
}

document.querySelectorAll('.qButtons').forEach(question => question.addEventListener('click', showQuestion));

document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));