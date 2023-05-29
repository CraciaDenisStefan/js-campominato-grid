"use strict";
let start = document.querySelector(`.start_100`);//prendiamo il pulsante

//Creiamo una function per creare un div con dentro una classe che cambia in base alla scelta del utente
function createSquareElement(livello) {
    let square = document.createElement('div');
    
    if (livello === 'Easy') {
        square.classList.add('square');
    } else if (livello === 'Medium') {
        square.classList.add('square_9');
    } else if (livello === 'Hard') {
        square.classList.add('square_7');
    }

    return square;
  }
//Mettiamo l'inizio del pulsante 
start.addEventListener(`click`, function(){
//Creiamo una function per determinare il numero di quadrati in base alla scelta del utente 
    function level(){
        let level = document.getElementById(`level`).value;
            if(level === `Easy`){
                 level = 100
                }else if(level === `Medium`){
                 level = 81
                }else if(level === `Hard`){
                  level = 49
                }
        return level
    }
//Prendiamo il container del main e li creiamo una classe in modo che si apra insieme al pulsante
    let container = document.querySelector(`.container_main`)
    container.classList.add(`container`)
//Svuotiamo il container ad ogni click per inserire i nuovi dati della nuova difficoltà
    container.innerHTML = '';
//Creiamo il ciclo che si comportera di conseguenza alle scelte precedenti 
    for (let i=0; i<level(); i++){
        let square = createSquareElement(document.getElementById('level').value);
        square.innerText = i + 1;
//Mettiamo in pagina i risultati 
        container.append(square)
//Facciamo uscire nella console il quadrato con il numero cliccato dal utente e cambiamo il background del quadrato (senza poi ritornare al colore iniziale ricliccando) 
    square.addEventListener(`click`, function(){
        this.classList.add(`clicked`)
        console.log(this);
    })
    }
})