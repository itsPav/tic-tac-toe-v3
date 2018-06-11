const boardDiv = document.getElementById('board');
const startScreen = document.getElementById('start');
const winScreen = document.getElementById('finish');

// adding event listener to the box classes
const boxs = document.getElementsByClassName('box');

const startButton = document.getElementsByClassName('button')[0];
const newGame = document.getElementsByClassName('button')[1];

boardDiv.style.display = 'none';
winScreen.style.display = 'none';  

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    boardDiv.style.display = 'block';
    player1.className = 'players active';
});

newGame.addEventListener('click', () => {
    winScreen.style.display = 'none';
    boardDiv.style.display = 'block';
    player1.className = 'players active';
    clearBoard();
});

// X and O Functionality

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

var currPlayer = 0;
var win = 0;
var plays = 0;

function playXO() {

        // remove any events on he box that was just clicked
        for (let index = 0; index < boxs.length; index++) {
            if(boxs[index].className == 'box box-filled-1' || boxs[index].className == 'box box-filled-2')
            {
                boxs[index].removeEventListener('mouseenter', mouseEnter, true);
                boxs[index].removeEventListener('mouseleave', mouseLeave, true);
                boxs[index].removeEventListener('click', mouseClick, true);
            }
        }

        // check if tie
        if(plays === 9)
        {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
        }
}

function clearBoard() {
    for (let index = 0; index < boxs.length; index++) {
        if(boxs[index].className == 'box box-filled-1' || boxs[index].className == 'box box-filled-2')
        {
            boxs[index].className == 'box';
        }
    }
    win = 0;
    plays = 0;
}

for (let index = 0; index < boxs.length; index      ++) {
    boxs[index].addEventListener('mouseenter', mouseEnter,true);
    boxs[index].addEventListener('mouseleave', mouseLeave, true);
    boxs[index].addEventListener('click', mouseClick, true);

}

// mouse enter
function mouseEnter(e) {
    if(player1.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2') {
        e.target.style.backgroundImage = 'url(img/o.svg)';
    }
    else if (player2.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2')
    {
        e.target.style.backgroundImage = 'url(img/x.svg)';
    }
}

// mouse leave
function mouseLeave(e) {
    e.target.style.backgroundImage = '';
}

// click on empty block

function mouseClick(e) {
    if(player1.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2') {
        e.target.className = 'box box-filled-1';
        player1.className = 'players';
        player2.className = 'players active';
        currPlayer = 1;
        plays += 1;
    } else if(player2.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2'){
        e.target.className = 'box box-filled-2';
        player1.className = 'players active';
        player2.className = 'players';
        currPlayer = 0;
        plays += 1;
    }
    playXO();
}