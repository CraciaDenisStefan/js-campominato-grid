"use strict";

let start = document.querySelector(`.start_100`);

function createSquareElement(){
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    return square;
}


start.addEventListener(`click`, function(){

    let container = document.querySelector(`.container`)

    for (let i=0; i<100; i++){
        let square = createSquareElement();
        container.append(square)
    }


})