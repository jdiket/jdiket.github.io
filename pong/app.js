const canvas = document.querySelector('#myCanvas');
const contx = canvas.getContext('2d');
const resetButton = document.querySelector('.reset');
let speed = 4.0;

// Game info for Player 1
const player1 = {
    x: 0,
    y: 50,
    speed: 5,
    width: 15,
    height: 100,
    score: 0,
};

const keyPressP1 = {
    KeyW: false,
    KeyS: false,
};

// Game info for Player 2
const player2 = {
    x: 785,
    y: 450,
    speed: 5,
    width: 15,
    height: 100,
    score: 0,
};

const keyPressP2 = {
    ArrowUp: false,
    ArrowDown: false
};

// Game info for the ball

const ball = {
    x: (canvas.width / 2),
    y: (canvas.height / 2),
    width: 10,
    height:10,
    ballSpeedX: speed,
    ballSpeedY: -speed,
}

// Create visual elements on the page.  Draws paddels and position header after clearing

const draw = () => {
    contx.clearRect(0, 0, canvas.width, canvas.height);
    move();
    checkCollision(player1, player2);

    // Player 1
    contx.fillStyle = 'teal';
    contx.fillRect(player1.x, player1.y, player1.width, player1.height);

    // Player 2
    contx.fillStyle = 'hotpink';
    contx.fillRect(player2.x, player2.y, player2.width, player2.height);

    // Ball
    contx.fillStyle = 'white';
    contx.fillRect(ball.x, ball.y, ball.width, ball.height);

    // Screen output to track position of players
    let output = `Player 1: ${player1.score}  |  Player 2: ${player2.score}`;
    contx.font = '24px serif';
    contx.textAlign = 'center';
    contx.fillStyle = 'white';
    contx.fillText(output, 400, 30);

    requestAnimationFrame(draw);
}

// functions to track the input of players with event listeners

const keyDown = (event) => {
    if (event.code in keyPressP1) {
        keyPressP1[event.code] = true;
    }
    if (event.code in keyPressP2) {
        keyPressP2[event.code] = true;
    }
}

const keyUp = (event) => {
    if (event.code in keyPressP1) {
        keyPressP1[event.code] = false;
    }
    if (event.code in keyPressP2) {
        keyPressP2[event.code] = false;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Collision detection funciton

const checkCollision = (thing1, thing2) => {
    let hit = ((thing1.x < (thing2.x + thing2.width)) && ((thing1.x + thing1.width) > thing2.x) && (thing1.y < (thing2.y + thing2.height)) && ((thing1.y + thing1.height) > thing2.y)) 
    return hit;
}

// Function to reset ball after score

const resetBall = () => {
    ball.x = (canvas.width / 2);
    ball.y = (canvas.height / 2);
    ballSpeedX = speed;
    ballSpeedY = -speed;
}

const resetGame = () => {
    player1.score = 0;
    player1.x = 0;
    player1.y = 50;

    player2.score = 0;
    player2.x = 785;
    player2.y = 450;

    resetBall();
}

resetButton.addEventListener('click', resetGame);

// Primary movement function based on player input

const move = () => {

    // Movement control for Player 1
    if (keyPressP1.KeyW) {
        if (player1.y >= 0) {
            player1.y -= player1.speed;
        }
    } else if (keyPressP1.KeyS) {
        if ((player1.y + player1.height) <= canvas.height) {
            player1.y += player1.speed;
        }
    }

    // Movement control for Player 2
    if (keyPressP2.ArrowUp) {
        if (player2.y >= 0) {
            player2.y -= player2.speed;
        }
    } else if (keyPressP2.ArrowDown) {
        if ((player2.y + player2.height) <= canvas.height) {
            player2.y += player2.speed;
        }
    }

    // Movement control for the ball
    ball.x += ball.ballSpeedX;
    ball.y += ball.ballSpeedY;

    if (ball.x < 0) {
        player2.score ++;
        resetBall();
    } else if (ball.x > canvas.width) {
        player1.score ++;
        resetBall();
    }

    if (ball.x < 0 || ball.x > canvas.width) {
        ball.ballSpeedX *= -1;
    }
    if (ball.y < 0 || ball.y > canvas.height) {
        ball.ballSpeedY *= -1;
    }

    if (checkCollision(ball, player1)) {
        ball.ballSpeedX *= -1;
        let halfPlayer1 = (player1.y + player1.height) / 2;
        let halfBall = (ball.y + ball.height) / 2;
        if (halfPlayer1 < halfBall) {
            ball.ballSpeedY = speed;
        } else {
            ball.ballSpeedY = -speed;
        }
    }

    if (checkCollision(ball, player2)) {
        ball.ballSpeedX *= -1;
        let halfPlayer1 = (player1.y + player1.height) / 2;
        let halfBall = (ball.y + ball.height) / 2;
        if (halfPlayer1 < halfBall) {
            ball.ballSpeedY = speed;
        } else {
            ball.ballSpeedY = -speed;
        }
    }
}

requestAnimationFrame(draw);