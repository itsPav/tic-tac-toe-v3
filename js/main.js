const boardDiv = document.getElementById('board');
const startScreen = document.getElementById('start');

const startButton = document.getElementsByClassName('button')[0];

boardDiv.style.display = 'none';

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    boardDiv.style.display = 'block';
});