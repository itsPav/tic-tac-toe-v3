const boardDiv = document.getElementById('board');
const startScreen = document.getElementById('start');
const winScreen = document.getElementById('finish');
const endMessage = document.getElementsByClassName('message')[0];

// adding event listener to the box classes
const boxs = document.getElementsByClassName('box');

const startButton = document.getElementsByClassName('button')[0];
const newGame = document.getElementsByClassName('button')[1];

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const nameHeader = document.getElementById('name');
const winnerName = document.getElementById('winnerName');
var name = '';


boardDiv.style.display = 'none';
winScreen.style.display = 'none';  

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    boardDiv.style.display = 'block';
    player1.className = 'players active';
    name = document.getElementsByTagName('input')[0].value;
    nameHeader.innerHTML = name;
    addEvents();
});

newGame.addEventListener('click', () => {
    winScreen.style.display = 'none';
    boardDiv.style.display = 'block';
    clearBoard();
});

// X and O Functionality

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
}

function clearBoard() {
    player1.className = 'players active';
    player2.className = 'players';

    for (let index = 0; index < boxs.length; index++) {

        if(boxs[index].className == 'box box-filled-1' || boxs[index].className == 'box box-filled-2')
        {
            boxs[index].className = 'box';
            boxs[index].style.backgroundImage = '';
        }
    }
    win = 0;
    plays = 0;
    addEvents();
}

// addeventlisteners to each box
function addEvents() {
    for (let index = 0; index < boxs.length; index      ++) {
        boxs[index].addEventListener('mouseenter', mouseEnter,true);
        boxs[index].addEventListener('mouseleave', mouseLeave, true);
        boxs[index].addEventListener('click', mouseClick, true);
    }
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
    // need to figure out which li was clicked in the ul list
    var index = nodeIndex(this);

    if(player1.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2') {
        e.target.className = 'box box-filled-1';
        player1.className = 'players';
        player2.className = 'players active';
        currPlayer = 1;
        plays += 1;
    } 
    else if(player2.className == 'players active' && e.target.className != 'box box-filled-1' && e.target.className != 'box box-filled-2'){
        e.target.className = 'box box-filled-2';
        player1.className = 'players active';
        player2.className = 'players';
        currPlayer = 0;
        plays += 1;
    }

    // pass the className, player, and the li index to boardCheck
    boardCheck(currPlayer, index);   
    playXO();
}

// check index of clicked li
function nodeIndex(node) {
    let index = 0;
    for (index; index < boxs.length; index++) {
        if(node == boxs[index])
            break;
    }
    return index;
}

// check if won
function boardCheck(player, boxIndex) {

    // vertical check
    if(boxs[boxIndex].className == boxs[0].className && boxs[boxIndex].className == boxs[3].className && boxs[boxIndex].className == boxs[6].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }    
    if(boxs[boxIndex].className == boxs[1].className && boxs[boxIndex].className == boxs[4].className && boxs[boxIndex].className == boxs[7].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }   
    if(boxs[boxIndex].className == boxs[2].className && boxs[boxIndex].className == boxs[5].className && boxs[boxIndex].className == boxs[8].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }   

    // horizontal check
    if(boxs[boxIndex].className == boxs[0].className && boxs[boxIndex].className == boxs[1].className && boxs[boxIndex].className == boxs[2].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }    
    if(boxs[boxIndex].className == boxs[3].className && boxs[boxIndex].className == boxs[4].className && boxs[boxIndex].className == boxs[5].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }   
    if(boxs[boxIndex].className == boxs[6].className && boxs[boxIndex].className == boxs[7].className && boxs[boxIndex].className == boxs[8].className) {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }   

    // diagonal check
    if(boxs[boxIndex].className == boxs[4].className && boxs[boxIndex].className == boxs[8].className && boxs[boxIndex].className == boxs[0].className) 
    {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }
    
    if(boxs[boxIndex].className == boxs[4].className && boxs[boxIndex].className == boxs[2].className && boxs[boxIndex].className == boxs[6].className) 
    {
        if(player == 1) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-one';
            endMessage.innerHTML = 'Winner';
            winnerName.innerHTML = name;
        }
        if(player == 0) {
            boardDiv.style.display = 'none';
            winScreen.style.display = 'block';  
            winScreen.className = 'screen screen-win screen-win-two';
            endMessage.innerHTML = 'Winner';
        }
    }

    if(plays === 9)
    {
        boardDiv.style.display = 'none';
        winScreen.style.display = 'block';  
        winScreen.className = 'screen screen-win screen-win-tie';
        endMessage.innerHTML = "It's a Tie!";
    }
}