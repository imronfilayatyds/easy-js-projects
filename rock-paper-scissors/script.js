var playerScore = 0;
var computerScore = 0;

while (true) {
    var choice = prompt("What do you choose? (rock/scissor/paper)");
    var comp = Math.random();

    if ( comp < 0.34 ) {
        comp = 'rock';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'scissor';
    } else {
        comp = 'paper';
    }

    if ( choice == comp ) {
        alert('Hasilnya seri (draw)');
    } else if ( choice == 'rock' && comp == 'scissor' ) {
        playerScore++;
        alert('Kamu menang! Score kamu = ' + playerScore + ' | Score komputer = ' + computerScore);
    } else if ( choice == 'scissor' && comp == 'paper' ) {
        playerScore++;
        alert('Kamu menang! Score kamu = ' + playerScore + ' | Score komputer = ' + computerScore);
    } else if ( choice == 'paper' && comp == 'rock' ) {
        playerScore++;
        alert('Kamu menang! Score kamu = ' + playerScore + ' | Score komputer = ' + computerScore);
    } else {
        computerScore++;
        alert('Kamu kalah! Score kamu = ' + playerScore + ' | Score komputer = ' + computerScore);
    }
}
