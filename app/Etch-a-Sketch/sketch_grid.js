
function changeColor(event) {
    const div = event.target;
    div.style.backgroundColor = 'black'; 
}

export function sketch_grid(number){
    const sketch = document.getElementById('sketch')
    const screenWidth = window.innerWidth;
    const gridWidth = (80 / 100) * screenWidth;

    sketch.style.display = 'grid';
    sketch.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    sketch.style.width = `${gridWidth}px`;
    sketch.style.height = `${gridWidth}px`; 

    for(let i=1;i<=number;i++){
        for(let j=1;j<=number;j++){
            const child = document.createElement('div')
            child.style.gridRow=i
            child.style.gridColumn=j
            sketch.appendChild(child)
    
            child.addEventListener('click', changeColor)
        }
    }    
}
