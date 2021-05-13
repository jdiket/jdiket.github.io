const hitButton = document.querySelector('.hit');
const stayButton = document.querySelector('.stay');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

let playerHand = [];
let playerValue = 0;
let computerHand = [];
let computerValue = 0;

const deckArray = ['2', '3', '4', '5', '6', '7', '8', '9', 'Jack', 'Queen', 'King', 'Ace'];

const deckObject = {
    2: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 2,
        quantity: 2
    }, 
    3: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 3,
        quantity: 2
    }, 
    4: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 4,
        quantity: 2
    }, 
    5: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 5,
        quantity: 2
    }, 
    6: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 6,
        quantity: 2
    }, 
    7: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 7,
        quantity: 2
    }, 
    8: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 8,
        quantity: 2
    }, 
    9: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 9,
        quantity: 2
    }, 
    Jack: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 10,
        quantity: 2
    }, 
    Queen: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 10,
        quantity: 2
    }, 
    King: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 10,
        quantity: 2
    }, 
    Ace: {
        suits: ['spades', 'hearts', 'diamonds', 'clubs'],
        value: 11,
        quantity: 2
    }, 
}

const playerHit = () => {
    let card = deckArray[Math.floor(Math.random() * deckArray.length)];
    console.log('player gets another card: ' + card);
    playerHand.push(card);
    playerValue += deckObject[card].value;
    console.log(playerHand);
    console.log(playerValue);

    displayPlayerHand();
}

const dealPlayer = () => {
    let cardOne = deckArray[Math.floor(Math.random() * deckArray.length)];
    let cardTwo = deckArray[Math.floor(Math.random() * deckArray.length)];
    playerHand.push(cardOne);
    playerHand.push(cardTwo);
    playerValue = (deckObject[cardOne].value) + (deckObject[cardTwo].value);
    console.log(playerHand);
    console.log(playerValue);

    displayPlayerHand();
}

const displayPlayerHand = () => {
    while (document.querySelector('.playerHand').firstChild) {
        document.querySelector('.playerHand').removeChild(document.querySelector('.playerHand').lastChild);
    }

    for (let i = 0; i < playerHand.length; i ++) {
        let playerShowCard = document.createElement('h1');
        playerShowCard.innerText = playerHand[i];
        document.querySelector('.playerHand').appendChild(playerShowCard);  
    }
}

const dealComputer = () => {
    let cardOne = deckArray[Math.floor(Math.random() * deckArray.length)];
    let cardTwo = deckArray[Math.floor(Math.random() * deckArray.length)];
    computerHand.push(cardOne);
    computerHand.push(cardTwo);
    computerValue = (deckObject[cardOne].value) + (deckObject[cardTwo].value);
    console.log(computerHand);
    console.log(computerValue);

    let computerShowCard = document.createElement('h1');
    computerShowCard.innerText = computerHand[1];
    document.querySelector('.computerHand').appendChild(computerShowCard);
}

const playComputer = () => {
    while (computerValue <= 16) {
        let card = deckArray[Math.floor(Math.random() * deckArray.length)];
        computerHand.push(card)
        computerValue += deckObject[card].value;
    }

    winOrLose();
}

const startGame = () => {
    dealComputer();
    dealPlayer();
}

const restart = () => {
    window.location.reload();
}

const winOrLose = () => {
    if ((playerValue === 21) && (playerHand.length === 2)) {
        console.log('Blackjack! Player wins');
    } else if ((playerValue > 21) && (computerValue > 21)) {
        console.log('Both players bust');
    } else if ((playerValue > 21) && (computerValue <= 21)) {
        console.log('Player busts, computer wins');
    } else if (playerValue === computerValue) {
        console.log('Push!');
    } else if ((playerValue < 21) && (computerValue < 21)) {
        console.log('Player scored: ' + playerValue);
        console.log('Computer scored: ' + computerValue);
    } else {
        console.log('what happened?');
    }
}

hitButton.addEventListener('click', playerHit);
stayButton.addEventListener('click', playComputer);
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', restart);