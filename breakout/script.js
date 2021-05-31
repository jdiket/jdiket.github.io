const canvas = document.createElement('canvas');
const canvasWrite = canvas.getContext('2d');
document.body.prepend(canvas);

const game = {
    grid: 60,
    animation: ''
};

const player = {
    Xpos: game.grid * 7,
    Ypos: game.grid * 8,
    width: game.grid * 2,
    height: game.grid / 2,
    color: 'red',
    speed: 5
};

const ball = {
    Xpos: game.grid * 7,
    Ypos: game.grid * 5,
    width: game.grid / 3,
    height: game.grid / 3,
    color: 'goldenrod',
    directionX: 5,
    directionY: 5
};

const keyPress = {
    ArrowLeft: false,
    ArrowRight: false
};

canvas.setAttribute('width',game.grid * 15);
canvas.setAttribute('height', game.grid * 10);
canvas.style.border = '1px solid black';
canvas.style.background = 'black';

document.addEventListener('keydown', (e) => {
    if (e.code in keyPress) { keyPress[e.code] = true }
});
document.addEventListener('keyup', (e) => {
    if (e.code in keyPress) { keyPress[e.code] = false }
});
document.addEventListener('mousemove', (e) => {
    console.log(e);
    const val = (e.clientX - canvas.offsetLeft);
    if (val > player.width && val < canvas.width) {
        player.Xpos = val - player.width;
    }
});

const collisionDetection = (object1, object2) => {
    const xAxis = (object1.Xpos<(object2.Xpos + object2.width))&&((object1.Xpos + object1.width)>object2.Xpos);
    const yAxis = (object1.Ypos<(object2.Ypos + object2.height))&&((object1.Ypos+object1.height)>object2.Ypos);
    const collision = xAxis && yAxis;
    return collision;
};

const playerMove = () => {
    if (keyPress.ArrowLeft) { player.Xpos -= player.speed }
    if (keyPress.ArrowRight) { player.Xpos += player.speed }
};

const ballMove = () => {
    if (ball.Xpos > canvas.width || ball.Xpos < 0) { ball.directionX *= -1 }
    if (ball.Ypos > canvas.height || ball.Ypos < 0) { ball.directionY *= -1 }
    ball.Xpos += ball.directionX;
    ball.Ypos += ball.directionY;
};

const drawPlayer = () => {
    canvasWrite.beginPath();
    canvasWrite.rect(player.Xpos, player.Ypos, player.width, player.height);
    canvasWrite.fillStyle = player.color;
    canvasWrite.fill();
    canvasWrite.closePath();
};

const drawBall = () => {
    canvasWrite.beginPath();
    canvasWrite.rect(ball.Xpos, ball.Ypos, ball.width, ball.height);
    canvasWrite.stroke();
    canvasWrite.closePath();

    canvasWrite.beginPath();
    canvasWrite.fillStyle = ball.color;
    let adj = ball.width/2;
    canvasWrite.arc(ball.Xpos + adj, ball.Ypos + adj, ball.width/2, 0, Math.PI*2);
    canvasWrite.fill();
    canvasWrite.closePath();
};
 
const draw = () => {
    canvasWrite.clearRect(0, 0, canvas.width, canvas.height);
    playerMove();
    ballMove();
    drawPlayer();
    drawBall();
    if (collisionDetection(player, ball)) {
        ball.directionY *= -1;
        let hitLocation = (ball.Xpos + (ball.width/2)) - player.Xpos;
        let hitFromCenter = hitLocation - (player.width / 2);
        let directionChange = Math.ceil(hitFromCenter / (player.width / 10));
        ball.directionX = directionChange;
    };
    game.animation = requestAnimationFrame(draw);
};

game.animation = requestAnimationFrame(draw);