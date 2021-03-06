
// Arrays of game tools
const board = ['pink', 'blue', 'green', 'red', 'purple', 'orange'];
const myBoard = [];
const keyPress = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
}
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
    pos: 32,
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




const createSquare = (elementValue) => {
    const div = document.createElement('div');
    div.classList.add('box');

    // Create boundary wall, dot, or Super Dot based on gameBoard array
    if (elementValue === 1) {
        div.classList.add('wall')
    } else if (elementValue === 2) {
        const dot =document.createElement('div');
        dot.classList.add('dot');
        div.append(dot);
    } else if (elementValue === 3) {
        const dot = document.createElement('div');
        dot.classList.add('superDot');
        div.append(dot);
    }

    gameContent.grid.append(div);
    myBoard.push(div);

    div.t = elementValue;
    div.idVal = myBoard.length;
    div.addEventListener('click', (e) => {console.dir(div)})
}

const createGhosts = () => {
    let newGhost = gameContent.ghost.cloneNode(true);
    newGhost.pos = 11 + ghosts.length;
    newGhost.style.display = 'block';
    newGhost.style.backgroundColor = board[ghosts.length];
    newGhost.namer = board[ghosts.length];
    ghosts.push(newGhost);
    // console.log(newGhost);
}

const move = () => {
    if (gameContent.inPlay) {
        player.coolDown --;
        if (player.coolDown < 0) {
            ghosts.forEach((ghost) => {
                myBoard[ghost.pos].append(ghost);
                // console.log(myBoard);
            })
            // Player movement from keypress
            let tempPos = player.pos;
            if (keyPress.ArrowRight) {
                player.pos += 1;
            } else if (keyPress.ArrowLeft) {
                player.pos -= 1;
            } else if (keyPress.ArrowUp) {
                player.pos -= gameContent.size;
            } else if (keyPress.ArrowDown) {
                player.pos += gameContent.size;
            }

            let newPlace = myBoard[player.pos];
            if (newPlace.t === 1) {
                console.log('wall');
                player.pos = tempPos;
            }
            if (newPlace.t === 2) {
                console.log('dot');
                myBoard[player.pos].innerHtml = '';
                newPlace.t = 0;
            }

            player.coolDown = player.speed;
            // console.log(newPlace);
        }
        

        // console.log(player.pos);
        myBoard[player.pos].append(gameContent.pacman);
        player.play = requestAnimationFrame(move);
    }
}

const createGame = () => {
    for (let i = 0; i < gameContent.ghosts; i ++) {
        createGhosts();
    }

    tempBoard.forEach((boardArrayValue) => {
        createSquare(boardArrayValue);
        // console.log(cell);
    })

    for (let i = 0; i < gameContent.size; i ++) {
        gameContent.x += ` ${gameContent.height}px `;
        // console.log(gameContent.x);
    }
    gameContent.grid.style.gridTemplateColumns = gameContent.x;
    gameContent.grid.style.gridTemplateRows = gameContent.x;
}

gameContent.ghost.style.display = 'none';
gameContent.pacman.style.display = 'none';
createGame();

document.addEventListener('keydown', (e) => {
    if (e.code in keyPress) {
        keyPress[e.code] = true;
    }
    if (!gameContent.inPlay && !player.pause) {
        gameContent.pacman.style.display = 'block';
        player.play = requestAnimationFrame(move);
        gameContent.inPlay = true;
    }
    
})

document.addEventListener('keyup', (e) => {
    if (e.code in keyPress) {
        keyPress[e.code] = false;
    }
})