let playerScore = 0;

const qText = document.querySelector('#qCard');

console.log('idiot');

const showQuestion = () => {
    qText.style.display = 'block';
}

const answerQuestion = () => {
    console.log('choice made');
}

document.querySelectorAll('.qButtons').forEach(question => question.addEventListener('click', showQuestion));

document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));