const buttons = document.querySelectorAll('button');

const glow = () => {
    buttons.style.boxShadow = '0px 0px 5px 5px pink';
}

console.log(buttons);
document.querySelectorAll('.gameButton').forEach(buttons => buttons.addEventListener('click', glow));