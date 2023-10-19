"use strict";
mineSweeper();
function mineSweeper(){
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById('reset-btn');

  resetBtn.addEventListener('click',play);
  startBtn.addEventListener("click", play);

  /* funzione play */
  function play() {

    let gameOn = true;
    let score = 0;
    let square
    /* bombs number */
    const bombsNumber = 16;
    /* position of the bombs */
    let bombs = [];
    /* dichiaro il valore della difficolta */
    const difficulty = document.querySelector("select").value;
    /* faccio sparire la select ed il bottone */
    const gameStart = document.getElementById("game-start");
    gameStart.classList.add("d-none");
    /* faccio apparire bottone reset */
    const gameReset = document.getElementById("game-reset");
    gameReset.classList.remove('d-none');
    /* faccio apparire il punteggio */
    const scoreEl = document.getElementById('score');
    scoreEl.classList.remove('d-none');
    /* reset punteggio */
    scoreEl.innerHTML = 'Il tuo punteggio è : ' + score;
    scoreEl.classList.remove('text-danger','text-success')
    /* numero di quadratini da generare */
    let numSquare = difficulty === "medio" ? 81 : difficulty === "difficile" ? 49 : 100;
    /* bombs generator */
    while (bombs.length < bombsNumber) {
      let bomb = getRndInteger(1, numSquare);
      console.log(bomb);
      if (!bombs.includes(bomb)) {
        bombs.push(bomb);
      };
    };
    /* Max score */
    const maxScore = numSquare - bombsNumber;
    console.log(bombs);
    /* mi prendo la griglia di gioco */
    const playground = document.getElementById("playground");
    playground.classList.remove("d-none");
    playground.innerHTML = "";
    /* ciclo per stampare i quadratini */
    for (let i = 0; i < numSquare; i++) {
      /* genero quadratino */
      let square = drawSquare(i, numSquare, bombs);
      /* appendo il quadratino alla griglia */
      playground.append(square);
    }
    /* disegno quadrato */
    function drawSquare(squareIndex, numSquare, bombs){
      let squareWidth = Math.sqrt(numSquare);
      square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `calc(100% / ${squareWidth})`;
      square.style.height = square.style.width;
      square.innerHTML = squareIndex + 1;
      square.addEventListener("click",squareClick)
      return square;
    };
    /* gameover function */
    function gameOver(){
      const squareWBombs = document.getElementsByClassName('square');
      for(let i = 0; i < squareWBombs.length; i++){
        let el = squareWBombs[i];
        el.removeEventListener('click',squareClick);
        if(bombs.includes(parseInt(el.textContent))){
          el.classList.add("bomb");
          el.classList.add('text-black')
          el.innerHTML = '<i class="fa-solid fa-bomb fa-beat"></i>';
        }
      }
    }
    /* Square click fucntion */
    function squareClick(){
      square.classList.add("active");
      this.removeEventListener('click',squareClick)
      if (bombs.includes(parseInt(this.textContent))){
      this.classList.add("bomb");
      this.innerHTML = '<i class="fa-solid fa-bomb fa-beat"></i>';
      scoreEl.innerHTML = 'Oh no, hai perso! <br> Il tuo punteggio è : ' + score;
      classRemoveAdd(scoreEl,'text-white','text-danger');
      gameOver();
      } else{
      this.classList.add("active");
       score++;
      if(score === maxScore){
         scoreEl.innertext = 'Complimenti hai vinto! Vorrei avere la tua fortuna';
         classRemoveAdd(scoreEl,'text-white','text-success');
         gameOver();
      } else{
        scoreEl.innerText = 'Il tuo punteggio è : ' + score;
      };
    };
  };
};
};