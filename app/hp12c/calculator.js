let number = 10
let history = Array(number).fill(0);
let current_number = 0;

function display() {
    const ul_history = document.getElementById('history')
    ul_history.innerHTML = ''


    for (let i = history.length-1; i >= 0; i--){
        const li = document.createElement('li')
        li.textContent = '\#' + (i+1) + ': ' + history[i]
        ul_history.appendChild(li)
    }

    const div_display = document.getElementById('display')
    div_display.textContent = current_number
}

function history_update () {
    history.shift()
    history.push(current_number)
    current_number = 0
    display()
}

function current_number_update (num) {
    current_number = current_number*10 + num
    display()
}

display()