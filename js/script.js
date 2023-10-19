"use strict";
mineSweeper();
function mineSweeper(){
    const btn = document.querySelector('button');


    btn.addEventListener('click', play);

    /* funzione play */
    function play (){
        /* bombs number */
        const bombsNumber = 16;
        /* position of the bombs */
        let bombs = [];
        /* dichiaro il valore della difficolta */
        const difficulty = document.querySelector('select').value;
        /* faccio sparire la select ed il bottone */
        const gameStart = document.getElementById('game-start');
        gameStart.classList.add('d-none');
        /* numero di quadratini da generare */
        let numSquare = (difficulty === 'medio') ? 81 : (difficulty === 'difficile') ? 49 : 100;
        /* bombs generator */
        while (bombs.length < bombsNumber){
            let bomb = getRndInteger(1, numSquare);
            console.log(bomb);
            if(!bombs.includes(bomb)){
                bombs.push(bomb);
            };
        };
        console.log(bombs);
        /* mi prendo la griglia di gioco */
        const playground = document.getElementById('playground');
        playground.classList.remove('d-none');
        playground.innerHTML= '';
        /* ciclo per stampare i quadratini */
        for(let i = 0; i < numSquare; i++){
            /* genero quadratino */
            let square = drawSquare(i,numSquare);
    
            /* appendo il quadratino alla griglia */
            playground.append(square);
        }
    }
    /* disegno quadrato */
    function drawSquare(squareIndex,numSquare){
        let squareWidth = Math.sqrt(numSquare);
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;
        square.innerHTML = squareIndex + 1;
        square.addEventListener('click',function(){
            square.classList.add('active');
            console.log(squareIndex + 1);
        });
        return square;
    }
}


