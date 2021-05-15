const canvas = document.querySelector('#myCanvas');
const contx = canvas.getContext('2d');

// Game info for Player 1
const player1 = {
    x: 50,
    y: 50,
    speed: 5,
    width: 15,
    height: 100,
};

const keyPressP1 = {
    KeyD: false,
    KeyA: false,
    KeyW: false,
    KeyS: false,
};

// Game info for Player 2
const player2 = {
    x: 550,
    y: 50,
    speed: 5,
    width: 15,
    height: 100,
};

const keyPressP2 = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
};

// Create visual elements on the page.  Draws paddels and position header after clearing

const draw = () => {
    contx.clearRect(0, 0, canvas.width, canvas.height);
    move();

    let output = `P1 X: ${player1.x} Y: ${player1.y} | P2 X: ${player2.x} Y: ${player2.y}`;
    // Player 1
    contx.fillStyle = 'blue';
    contx.fillRect(player1.x, player1.y, player1.width, player1.height);
    // Player 2
    contx.fillStyle = 'red';
    contx.fillRect(player2.x, player2.y, player2.width, player2.height);

    contx.font = '24px serif';
    contx.textAlign = 'center';
    contx.fillStyle = 'red';
    contx.fillText(output, 300, 30);

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
    
    // console.log(event);
    // move();
}

const keyUp = (event) => {
    if (event.code in keyPressP1) {
        keyPressP1[event.code] = false;
    }
    if (event.code in keyPressP2) {
        keyPressP2[event.code] = false;
    }
    // console.log(event);
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Primary movement function based on player input

const move = () => {
    if (keyPressP2.ArrowRight) {
        player2.x += player2.speed;
    } else if (keyPressP2.ArrowLeft) {
        player2.x -= player2.speed;
    } else if (keyPressP2.ArrowUp) {
        player2.y -= player2.speed;
    } else if (keyPressP2.ArrowDown) {
        player2.y += player2.speed;
    }

    if (keyPressP1.KeyD) {
        player1.x += player1.speed;
    } else if (keyPressP1.KeyA) {
        player1.x -= player1.speed;
    } else if (keyPressP1.KeyW) {
        player1.y -= player1.speed;
    } else if (keyPressP1.KeyS) {
        player1.y += player1.speed;
    }

    // draw();
}

// draw();

requestAnimationFrame(draw);