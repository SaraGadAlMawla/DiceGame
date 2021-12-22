let state = 0
let score1 = 0
let score2 = 0

const rollBtn = document.getElementById("rollBtn")
rollBtn.addEventListener("click", roll)

const againBtn = document.getElementById("again")
againBtn.addEventListener("click", reset)

const playerOne = document.getElementById("scoreVal1")
const playerTwo = document.getElementById("scoreVal2")

const scoreOne = document.getElementById("scoreHead1")
const scoreTwo = document.getElementById("scoreHead2")

const turn = document.getElementById("title")

function renderGame(num){
    if(state){
        turn.textContent = "Player one's turn"
        score1 += num
        playerOne.textContent = num
        scoreOne.textContent = "Score: " + score1
        check(score1, score2)
    }
    else{
        turn.textContent = "Player two's turn"
        score2 += num
        playerTwo.textContent = num
        scoreTwo.textContent = "Score: " + score2
        check(score1, score2)
    }
    state = !state
}

function check(score1, score2){
    if((score1 >= 20) || (score2 >= 20)){
        if(state){
            turn.textContent = "Player two WINS! 🥳✨"
            playerOne.classList.add("winner");
            rollBtn.disabled = true
        }
        else{
            turn.textContent = "Player one WINS! 🥳✨"
            playerTwo.classList.add("winner");
            rollBtn.disabled = true
        }
    }
}

function roll(){
    let num = Math.floor(Math.random()*6+1)
    renderGame(num)
}

function reset(){
    if(state){
        playerTwo.classList.remove("winner");
    }
    else{
        playerOne.classList.remove("winner");
    }
    state = 0
    score1 = 0
    score2 = 0
    turn.textContent = "Player one's turn"
    playerTwo.textContent = "-"
    playerOne.textContent = "-"
    scoreOne.textContent = "Score: 0"
    scoreTwo.textContent = "Score: 0"
    rollBtn.disabled = false
}