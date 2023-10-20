let rps = () => {
    let rps_options = ['rock', 'paper', 'scissors']
    let pc_choice = ~~(Math.random()*rps_options.length)

    console.log("Computer boy already chose. Choose between Rock Paper and Scissors:")
    let player_choice = rps_options.indexOf(prompt().toLowerCase())

    if(player_choice == -1) {
        console.log("That is not a valid RPS choice. Please try again.")
        return rps()
    }
    else if(player_choice == pc_choice){
        console.log(`The Computer also chose ${rps_options[pc_choice]}.\n That's a Draw, please choose again.`)
        return rps()
    }

    console.log(`Wow. The Computer boy chose ${rps_options[pc_choice]}`)
    return ((pc_choice-player_choice)%3)*2-3
}

let game = () => {
    let score = 0
    
    while(1) {
        console.log(`The new score is now ${score}`)
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

// game()

function getUserInput() {
    return new Promise((resolve) => {
      const message = 'Please enter something:';
      console.log(message);
  
      const intervalId = setInterval(() => {
        const userInput = prompt(message);
  
        if (userInput !== null) {
          clearInterval(intervalId);
          console.log(`You entered: ${userInput}`);
          resolve(userInput);
        }
      }, 100);
    });
  }
  
  (async () => {
    const userInput = await getUserInput();
    console.log(`You can now use the input: ${userInput}`);
  })();
  