const canvas = document.querySelector('#myCanvas');
const contx = canvas.getContext('2d');

const keyPress = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
}

const player = {
    x: 50,
    y: 50,
    speed: 5,
};

// Create visual elements on the page.  Draws rectangle and position header after clearing

const draw = () => {
    contx.clearRect(0, 0, canvas.width, canvas.height);
    let output = `Pos X: ${player.x} Y: ${player.y}`
    contx.fillStyle = '#ffffff';
    contx.fillRect(player.x, player.y, 100, 100);
    contx.font = '24px serif';
    contx.textAlign = 'center';
    contx.fillStyle = 'red';
    contx.fillText(output, 300, 30);
}

// functions to track the input of player with event listeners

const keyDown = (event) => {
    keyPress[event.code] = true;
    // console.log(event);
    move();
}

const keyUp = (event) => {
    keyPress[event.code] = false;
    // console.log(event);
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Primary movement function based on player input

const move = () => {
    if (keyPress.ArrowRight) {
        player.x += player.speed;
    } else if (keyPress.ArrowLeft) {
        player.x -= player.speed;
    } else if (keyPress.ArrowUp) {
        player.y -= player.speed;
    } else if (keyPress.ArrowDown) {
        player.y += player.speed;
    }
    draw();
}

draw();