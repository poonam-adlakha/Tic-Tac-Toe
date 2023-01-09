window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const strategy = document.querySelector('#strategy');
  const drawBoard = () => {
    boxes.forEach((box, i) => {
        let borderStyle = '';
    if (i % 3 === 0) {
        borderStyle += 'border-right: 2px black solid;';
    } 
    if (i < 3) {
        borderStyle += 'border-bottom: 2px black solid;';
    } 
    if (i > 5) {
        borderStyle += 'border-top: 2px solid black;';
    }
    if (i % 3 === 2) {
        borderStyle += 'border-left: 2px solid black;';
    }
        box.style = borderStyle;
        box.addEventListener('click', boxClicked);
    })
}


const spaces = [];
const tick_circle = 'O';
const tick_x = 'X';
let currentPlayer = tick_circle;

/* Clickabkle boxes enabled*/

const boxClicked = (e) => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
    }
    if (playerWon()) {
        strategy.innerText = `${currentPlayer} has won`;
        return;
        restart();
      }
      currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
}

const playerWon = () => {
    if (spaces[0] === currentPlayer && spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerHTML = `${currentPlayer} wins up to top`;
      return true;
    }
    if (spaces[0] === currentPlayer && spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    if (spaces[0] === currentPlayer && spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
    if (spaces[8] === currentPlayer && spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    if (spaces[8] === currentPlayer && spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
    
    if (spaces[4] === currentPlayer && spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
};

drawBoard();
  
});

