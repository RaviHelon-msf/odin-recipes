let number = 10
let history = Array(number).fill(0);

const ul_history = document.getElementById('history')

for (let i=0; i< number; i++){
    const li = document.createElement('li')
    li.textContent = '\#' + i + ': ' + history[i]
    ul_history.appendChild(li)
}