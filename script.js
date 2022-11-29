const possibleChoices = document.querySelectorAll('.js-button')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());

let userChoice
let computerChoice
let randomNumber
let result
let round = 0
let userWins = 0
let computerWins = 0 
let finalResult

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    getComputerChoice()
    getResult()
    game()
}))

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
}

function getResult(){
    if(userChoice === computerChoice){
        result = 'tied'
    }else if(userChoice === 'rock' && computerChoice === 'paper'){
        result = 'loss'
    }else if(userChoice === 'rock' && computerChoice === 'scissors'){
        result = 'win'
    }else if(userChoice === 'paper' && computerChoice === 'scissors'){
        result = 'loss'
    }else if(userChoice === 'paper' && computerChoice === 'rock'){
        result = 'win'
    }else if(userChoice === 'scissors' && computerChoice === 'rock'){
        result = 'loss'
    }else if(userChoice === 'scissors' && computerChoice === 'paper'){
        result = 'win'
    }
    console.log(userChoice, computerChoice)
}

function game(){
    if(result === 'win'){
        userWins++
    }else if(result === 'loss'){
        computerWins++
    }

    const body = document.querySelector('.results')
    const newElement = document.createElement('li')
    newElement.getAttribute("id", "newElement")
    const elementText = document.createTextNode('You ' + result + '. The game is ' + userWins + '-' + computerWins)
    newElement.appendChild(elementText)
    if(round < 5){ 
        body.appendChild(newElement)
        round++
    }

    if(userWins > computerWins){
        finalResult = 'You won!'
    }else if(computerWins > userWins){
        finalResult = 'You loss!'
    }else if(round === 5){
        round = 4;
    }

    if(round === 5){            
        const resultElement = document.createElement('p')
        const resultText = document.createTextNode(finalResult)
        resultElement.appendChild(resultText)
        resultElement.getAttribute("class", "final-result")
        body.appendChild(resultElement)
        rockButton.disabled = true
        paperButton.disabled = true
        scissorsButton.disabled = true
    }
}