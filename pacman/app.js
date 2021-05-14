const board = ['pink', 'blue', 'green', 'red', 'purple', 'orange'];
const myBoard = [];
const ghosts = [];

const gameContent = {
    x: '',
    y: '',
    height: 100,
    size: 25,
    ghosts: 6,
    inPlay: false,
}

const player = {
    pos: 20,
    speed: 4,
    coolDown: 0,
    pause: false,
}

