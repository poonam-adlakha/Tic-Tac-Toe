window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const strategy = document.getElementsByClassName('strategy');
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
        currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
        e.target.innerText = currentPlayer;

    }
    if (playerWon()) {
        strategy.innerText = '${currentPlayer} has won';
      }
    
}
drawBoard();
  
});

