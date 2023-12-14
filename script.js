let playerScore = 0;
let computerScore = 0;
function makeChoice(playerChoice) {
        
    const choices = ['pierre', 'papier', 'ciseaux'];
    const computerChoice = choices[Math.ceil((Math.random() * choices.length)-1)
    ];

    //hide btns
    document.querySelector('.moves').style.display='none';
    // dispaly animation
    document.querySelector('.image-animation').style.display = 'block';
    document.querySelector('.computer-image').style.display = 'block'; 
    
    setTimeout(()=>{
        displayChoices(playerChoice, computerChoice);
        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);
        document.querySelector('#playerimagechoice').src=`./media/${playerChoice}Player.png`;
        document.querySelector('#playerimagechoice').style.display='block';
        document.querySelector('#playerimagechoice').style.animation='none';
        document.querySelector('#amine').style.display='block';
        document.querySelector('#computeimagechoice').src=`./media/${computerChoice}Computer.png`;
        document.querySelector('#computeimagechoice').style.display='block'; 
        document.querySelector('#computeimagechoice').style.animation='none'; 
    }, 2000)
    
}

function displayChoices(player, computer) {

    document.querySelector('.mychoice').textContent = `Mon Choix : ${player}`;
    document.querySelector('.computer').textContent = `Choix Machine : ${computer}`;
    
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'papier' && computerChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && computerChoice === 'papier')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    const resultText = document.getElementById('result-text');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const audio = new Audio();
    if (result === 'player') {
        playerScore++;
        resultText.textContent = 'You win!';
        resultText.style.color='green';
        audio.src = './media/won.mp3';

    } else if (result === 'computer') {
        computerScore++;
        resultText.textContent = 'Computer wins!';
        resultText.style.color='red'
        audio.src = './media/lose.mp3';

    } else {
        resultText.textContent = 'It\'s a draw!';
        resultText.style.color='blue'
        audio.src = './media/draw.mp3';


    }

    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    audio.play();
}

function resetScore (){

    const resultText = document.getElementById('result-text');
    resultText.textContent='';
    playerScore = 0;
    computerScore = 0;
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    playerScoreElement.textContent = `Player: 0`;
    computerScoreElement.textContent = `Computer: 0`;
    document.querySelector('.mychoice').textContent = `Mon Choix : `;
    document.querySelector('.computer').textContent = `Computer : `;
    document.querySelector('.moves').style.display='block';
    document.querySelector('.image-animation').style.display = 'none';
    document.querySelector('.computer-image').style.display = 'none'; 
    document.querySelector('#playerimagechoice').src=`./media/pierrePlayer.png`;
    document.querySelector('#playerimagechoice').style.animation='slideIn 2s ease-in-out';
    document.querySelector('#computeimagechoice').src=`./media/pierreComputer.png`;
    document.querySelector('#computeimagechoice').style.animation='slideInComputer 2s ease-in-out';
    document.querySelector('#amine').style.display='none';

     
}


function playAgain(){
    document.querySelector('.mychoice').textContent = `Mon Choix : `;
    document.querySelector('.computer').textContent = `Computer : `;
    document.querySelector('.moves').style.display='block';
    document.querySelector('.image-animation').style.display = 'none';
    document.querySelector('.computer-image').style.display = 'none'; 
    document.querySelector('#playerimagechoice').src=`./media/pierrePlayer.png`;
    document.querySelector('#playerimagechoice').style.animation='slideIn 2s ease-in-out';
    document.querySelector('#computeimagechoice').src=`./media/pierreComputer.png`;
    document.querySelector('#computeimagechoice').style.animation='slideInComputer 2s ease-in-out';
    document.querySelector('#amine').style.display='none';
    const resultText = document.getElementById('result-text');
    resultText.textContent='';
    
}



