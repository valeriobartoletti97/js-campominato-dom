/** 
* [getRndInteger]
* Genera numero random
* 
* @param {Number} min il primo numero
* @param {Number} max il secondo numero
*
* @returns {Number} il numero randomico generato
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/**
 * [isEven]
 * Determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean}
 */  
function isEven(num){
  /* if(num % 2 === 0){
    return true;
  } else {
    return false;
  } */
 return (num % 2 ===0) ? true : false;
}

/**
 * [printResult]
 * Stampo in Html
 * @param {String} alertColor 
 * @param {String} message 
 */

function printResult(alertColor,message){
  resultEl.classList.add(alertColor);
  resultEl.classList.remove('d-none');
  resultEl.innerText = message;
}

/**
 * [resetForm]
 * Resetto le classi del form
 * @param {String} classRemoved 
 * @param {String} classAdd 
 */

function resetForm(classRemoved,classAdd){
  resultEl.classList.remove(classRemoved)
  resultEl.classList.add(classAdd)
}

/**
 * [drawSquare]
 * Disegna un quadrato
 * @param {any} content 
 * @param {number} squareWidth 
 * @returns {object} quadrato creato
 */
function drawSquare(content,squareWidth){
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${squareWidth})`;
  square.style.height = square.style.width;
  square.innerHTML = content;
  return square;
}