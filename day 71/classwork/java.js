// var arrry = ['Bmw', 'Audi', 'Mercedes'];       classwork N1
// arrry.pop();
// arrry.push('Teslla');
// arrry.unshift('Bugatti');
// console.log(arrry)


// console.log(Math.round(Math.random() * 100));

// console.log(Math.round(Math.sqrt(144) * 100  + 1));

// console.log(Math.abs(-10));

// console.log(Math.floor(5.5));

// console.log(Math.ceil(5.2));

// console.log(Math.pow(2, 3));

// console.log(Math.max(5, 10, 15, 20, 25));

// console.log(Math.min(5, 10, 15, 20, 25));

const myScoreP = document.getElementById("myScore");
const compScoreP = document.getElementById("compScore");
const winsP = document.getElementById("winner");
const btnDiv = document.getElementById("options");
const computerChoiceP = document.getElementById("compPicked");

const compOptions = ["rock", "paper", "scissors"];

let compScore = 0;
let myScore = 0;

function play(e) {
    let btnId = e.target.id;

    let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
    
    if(btnId === compChoice) {
        winsP.textContent = "Tie!"
    } else if((btnId === "rock" && compChoice === "paper") || (btnId === "paper" && compChoice === "scissors") || (btnId === "scissors" && compChoice === "rock")) {
        compScore++;
        winsP.textContent = "You lost!";
        compScoreP.textContent = "Computer's score is: "+ compScore;
    }
    
    else {
        myScore++;
        winsP.textContent = "You won!";
        myScoreP.textContent = "Your score is: " + myScore;
    }
    computerChoiceP.textContent = "Computer's choice is:" + compChoice;
}

btnDiv.addEventListener("click", play);