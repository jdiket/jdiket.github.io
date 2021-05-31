const canvas = document.createElement('canvas');
const canvasWrite = canvas.getContext('2d');
document.body.prepend(canvas);

const game = {
    grid: 40,
    animation: ''
};

const player = {
    x: game.grid * 7,
    y: game.grid * 8,
    width: game.grid * 2,
    height: game.grid / 2,
    color: 'red',
    speed: 5
};

const keyPress = {
    ArrowLeft: false,
    ArrowRight: false
};

canvas.setAttribute('width',game.grid * 15);
canvas.setAttribute('height', game.grid * 10);
canvas.style.border = '1px solid black';
document.addEventListener('keydown', (e) => {
    if (e.code in keyPress) { keyPress[e.code] = true }
});
document.addEventListener('keyup', (e) => {
    if (e.code in keyPress) { keyPress[e.code] = false }
});

const move = () => {
    if (keyPress.ArrowLeft) { player.x -= player.speed }
    if (keyPress.ArrowRight) { player.x += player.speed }
};

const draw = () => {
    canvasWrite.clearRect(0, 0, canvas.width, canvas.height);
    move();
    canvasWrite.beginPath();
    canvasWrite.rect(player.x, player.y, player.width, player.height);
    canvasWrite.fillStyle = player.color;
    canvasWrite.fill();
    canvasWrite.closePath();
    game.animation = requestAnimationFrame(draw);
};

game.animation = requestAnimationFrame(draw);