
// Arrays of game tools
const board = ['pink', 'blue', 'green', 'red', 'purple', 'orange'];
const myBoard = [];

const ghosts = [];

// Primary object for game manipulation
const gameContent = {
    x: '',
    y: '',
    height: 100,
    size: 10,
    ghosts: 6,
    inPlay: false,
}

// Content from board that will move or be dynamic
gameContent.grid = document.querySelector('.grid');
gameContent.pacman = document.querySelector('.pacman');
gameContent.pacmanEye = document.querySelector('.eye');
gameContent.pacmanMouth = document.querySelector('.mouth');
gameContent.ghost = document.querySelector('.ghost');

const player = {
    pos: 20,
    speed: 4,
    coolDown: 0,
    pause: false,
}

const tempBoard = [
    1,1,1,1,1,1,1,1,1,1,
    1,3,2,2,2,2,2,2,3,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,3,2,2,2,2,2,2,3,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,3,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,
]


const createGame = () => {
    tempBoard.forEach((cell) => {
        createSquare(cell);
        // console.log(cell);
    })

    for (let i = 0; i < gameContent.size; i ++) {
        gameContent.x += ` ${gameContent.height}px `;
        // console.log(gameContent.x);
    }
    gameContent.grid.style.gridTemplateColumns = gameContent.x;
    gameContent.grid.style.gridTemplateRows = gameContent.x;
}

const createSquare = (cell) => {
    const div = document.createElement('div');
    div.classList.add('box');
    if (cell === 1) {
        div.classList.add('wall')
    } else if (cell === 2) {
        const dot =document.createElement('div');
        dot.classList.add('dot');
        div.append(dot);
    } else if (cell === 3) {
        const dot = document.createElement('div');
        dot.classList.add('superDot');
        div.append(dot);
    }

    gameContent.grid.append(div);
    myBoard.push(div);
}

// gameContent.ghost.style.display = 'none';
createGame();