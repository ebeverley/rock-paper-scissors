

// Sets the computers play 
function computerPlay(){
    let randomNum =  Math.floor(Math.random()*3 )+ 1;
    if(randomNum === 1){
        return  'Rock';
    }
    else if (randomNum === 2){
        return 'Paper';
    }
    else if (randomNum === 3){
        return 'Scissors';
    }
}
//INVOKES COMPUTER PLAY
computerPlay();  
//FUNCTION TO LOOP THROUGH THE ROUNDS
function game(){
    for(i = 0 ; i <= 5 ; i++){

        const playerSelection = prompt(' rock , paper, or scissors?');
           const computerSelection = computerPlay();

        let playRound = function(computerSelection,playerSelection){
    
        // ALL PLAYER CHOOSES ROCK CHOICES
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper'){
        return 'You lose! paper covers rock!';
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection ==='Scissors'){
        return 'You win! rock crushes scissors';
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Rock'){
        return 'TIED';
    }
    // ALL PLAYER CHOOSES PAPER CHOICES
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock'){
        return 'You win! paper covers rock!';
    }
    else if (playerSelection.toUpperCase() ==='PAPER' && computerSelection === 'Scissors'){
        return 'You lose! Scissors cuts paper';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Paper'){
        return 'TIED';
    }
    //ALL PLAYER CHOOSES SCISSORS CHOICES
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock'){
        return 'You win! paper covers rock!';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Scissors'){
        return 'You lose! Scissors cuts paper';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper'){
        return 'TIED';
}

}
//LOGS THE CURRENT OUTCOME 
console.log(playRound(computerSelection,playerSelection));

}
}
game();
//INVOKES GAME



