"use strict";

let start = document.querySelector(`.start_100`);

function createSquareElement(){
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    
    return square;
}


start.addEventListener(`click`, function(){

    let container = document.querySelector(`.container_main`)
    container.classList.add(`container`)
    container.innerHTML = '';
    for (let i=0; i<100; i++){
        let square = createSquareElement();
        square.innerText = i + 1;
       
        container.append(square)

    square.addEventListener(`click`, function(){
        this.classList.add(`clicked`)
        console.log(this);
    })

    }


})