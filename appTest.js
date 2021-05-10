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
    let randAnswerArray = [];
    let tempArray = testing.three;
    for (let i = 0; i < 4; i ++) {
        let randChoice = Math.floor(Math.random() * tempArray.length);
        randAnswerArray.push(tempArray[randChoice]);
        tempArray.splice(randChoice, 1);
        console.log(randChoice);
        console.log(tempArray);
        console.log(randAnswerArray);
    }
    choice1.innerText = randAnswerArray[0];
    choice2.innerText = randAnswerArray[1];
    choice3.innerText = randAnswerArray[2];
    choice4.innerText = randAnswerArray[3];
}

const answerQuestion = (e) => {
    console.log(e.currentTarget.innerText);
    qCard.style.display = 'none';
    
}

document.querySelectorAll('.qButtons').forEach(question => question.addEventListener('click', showQuestion));

document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));