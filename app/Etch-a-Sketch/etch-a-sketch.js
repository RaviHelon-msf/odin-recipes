sketch = document.getElementById('sketch')

let number = 16;

sketch.style.display = 'grid';
sketch.style.gridTemplateColumn = `repeat(${number}, 1fr)`;
sketch.style.gridTemplateRow = `repeat(${number}, 1fr)`;

for(let i=1;i<=number;i++){
    for(let j=1;j<=number;j++){
        const child = document.createElement('div')
        child.style.gridRow=i
        child.style.gridColumn=j
        sketch.appendChild(child)
    }
}