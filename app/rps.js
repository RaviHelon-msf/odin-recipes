let rps = () => {
    let rps_options = ['rock', 'paper', 'scissors']
    let pc_choice = ~~(Math.random()*rps_options.length)

    alert("Computer boy already chose.")
    let player_choice = rps_options.indexOf(prompt("Choose between Rock Paper and Scissors:").toLowerCase())

    if(player_choice == -1) {
        alert("That is not a valid RPS choice. Please try again.")
        return rps()
    }
    else if(player_choice == pc_choice){
        alert(`The Computer also chose ${rps_options[pc_choice]}.\n That's a Draw, please choose again.`)
        return rps()
    }

    alert(`Wow. The Computer boy chose ${rps_options[pc_choice]}`)
    return ((pc_choice-player_choice)%3)*2-3
    //  Estamos trabalhando com um corpo de 3 elementos. Podemos os comparar 
    // em base 3
    //  A conversão multiplicando por 2 e tirando 3 é para melhor distinguir 
    // as alternativas em relação à escolhida
}

let game = () => {
    let score = 0
    
    while(1) {
        alert(`The new score is now ${score}`)
        if( score >= 3)
            return "Hey. Thats a wrap. You Win!"

        if( score <= -3)
            return "Wow. Sorry, but that was it. You Lose!"

        score += rps()
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Hello Operator. Do you want to play a game?")

console.log("LOL. Don't Worry, it's just a RPS. I'll be the moderator.")

console.log("Write game() to play")