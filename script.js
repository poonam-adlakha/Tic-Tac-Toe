window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const strategy = document.querySelector('#strategy');
  const restartButton = document.getElementById('restart')
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


const emptyBox = [];
const tick_circle = 'O';
const tick_x = 'X';
let currentPlayer = tick_circle;

/* Clickabkle boxes enabled*/

const boxClicked = (e) => {
    const id = e.target.id;
    if (!emptyBox[id]) {
        emptyBox[id] = currentPlayer;
        e.target.innerText = currentPlayer;
    }
    if (playerWon()) {
        strategy.innerText = `${currentPlayer} has won`;
        restart();
        return;
      }
    if (playerDraw()) {
      strategy.innerText = `It's draw`;
      return;
    };
      currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
}

const playerWon = () => {
    if (emptyBox[0] === currentPlayer && emptyBox[1] === currentPlayer && emptyBox[2] === currentPlayer) {
      return true;
    }
    if (emptyBox[0] === currentPlayer && emptyBox[3] === currentPlayer && emptyBox[6] === currentPlayer) {
      return true;
    }
    if (emptyBox[0] === currentPlayer && emptyBox[4] === currentPlayer && emptyBox[8] === currentPlayer) {
      return true;
    }
    if (emptyBox[8] === currentPlayer && emptyBox[2] === currentPlayer && emptyBox[5] === currentPlayer) {
      return true;
    }
    if (emptyBox[8] === currentPlayer && emptyBox[6] === currentPlayer && emptyBox[7] === currentPlayer) {
      return true;
    }
    
    if (emptyBox[4] === currentPlayer && emptyBox[1] === currentPlayer && emptyBox[7] === currentPlayer) {
      return true;
    }
    if (emptyBox[4] === currentPlayer && emptyBox[3] === currentPlayer && emptyBox[5] === currentPlayer) {
      return true;
    }
    if (emptyBox[4] === currentPlayer && emptyBox[2] === currentPlayer && emptyBox[6] === currentPlayer) {
      return true;
    } 
};

const playerDraw = () => {
  let draw = 0
  emptyBox.forEach((emptyBoxes, i) => {
    if (emptyBox[i] !== null) {
      draw++;
    }
    if (draw === 9) {
      strategy.innerText = "Draw Game";
      restart();
    }
  });
  }

const restart = () => {
  setTimeout(() => {
    emptyBox.forEach((emptyBoxes, i)  => {
      emptyBox[i] = null;
    });
    boxes.forEach ((box) => {
      box.innerText = '';
    });
    strategy.innerText ="Play";
  }, 1000);
};

restartButton.addEventListener('click', restart);

restart();
drawBoard();
  
});

