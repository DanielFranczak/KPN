let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score"); // DOM variable - cache in the dom 
let computerScore_span = document.getElementById("computer-score"); // DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
function getComputerChoice(){
    const choices = ['rock', 'scissors', 'paper'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("This is a computer choice: " + computerChoice);
    console.log("This is an user choice: " + userChoice);
    function convertToPolish(letter){
        if (letter==="rock") return "Kamień";
        if (letter==="scissors") return "Nożyczki";
        if (letter==="paper") return "Papier";
    }
    function win(userChoice, computerChoice){
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        const smallUserWord= "gracz".fontsize(3).sub();
        const smallCompWord= "komputer".fontsize(3).sub();
        result_p.innerHTML = `${convertToPolish(userChoice)}${smallUserWord} pokonuje ${convertToPolish(computerChoice)}${smallCompWord}! Wygrywasz! Jeb Jeb jeb!!!`;
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},500);
    }
    

    function lose(userChoice, computerChoice){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        userScore_span.innerHTML = userScore;
        const smallUserWord= "gracz".fontsize(3).sub();
        const smallCompWord= "komputer".fontsize(3).sub();
        result_p.innerHTML = `${convertToPolish(computerChoice)}${smallCompWord} pokonuje  ${convertToPolish(userChoice)}${smallUserWord}! I jeb punkt dla sztucznej inteligencji!`;
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')},500);
    }
    function draw(userChoice, computerChoice){
        computerScore++;
        userScore++;
        computerScore_span.innerHTML = computerScore;
        userScore_span.innerHTML = userScore;
        const smallUserWord= "gracz".fontsize(3).sub();
        const smallCompWord= "komputer".fontsize(3).sub();
        result_p.innerHTML = `${convertToPolish(userChoice)}${smallUserWord} i ${convertToPolish(computerChoice)}${smallCompWord}! Patrzcie Państwo mamy REMIS Po jednym punkcie dla obydwu zawodników! Santo subito na drugie kopytoooo`;
        document.getElementById(userChoice).classList.add('grey-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')},500);
    }
    switch (userChoice+computerChoice){ // all situtation when player wins, loses and draws
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
        break; 
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
        break
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice, computerChoice);
        break
    }
    
}
function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })
    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
    paper_div.addEventListener('click', function () {
        game("paper");
    })
}

main();

function comparision(){
    
}
