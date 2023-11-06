let number = 10
let history = Array(number).fill(0);

function display(history) {

    const ul_history = document.getElementById('history')
    ul_history.innerHTML = ''


    for (let i = history.length-1; i >= 0; i--){
        const li = document.createElement('li')
        li.textContent = '\#' + (i+1) + ': ' + history[i]
        ul_history.appendChild(li)
    }
}

function history_update (num, hist=history) {
    hist.shift()
    hist.push(num)
    display(hist)
}

display(history)