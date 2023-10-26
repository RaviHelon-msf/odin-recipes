import { sketch_grid } from "/app/Etch-a-Sketch/sketch_grid.js";

const input = document.getElementById('sketchNumber')
const button = document.getElementById('sketchButton')
const text = document.getElementById('notice')

let number = 16;

button.addEventListener('click', ()=> {
    const inputValue = parseFloat(input.value);

    if (isNaN(inputValue) || inputValue>100 || inputValue<16){
        text.textContent ='Please input a number between 16 and 100';
    }
    else{
        number = inputValue
        text.textContent = ' '
    }

    sketch_grid(number)

});

sketch_grid(number)