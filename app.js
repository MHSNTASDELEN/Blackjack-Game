let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasblackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById ("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13) + 1
    if(randomNumer > 10){
        return 10
    }else if(randomNumer === 1){
        return 11
    }else{
        return randomNumer
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard  + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }   
    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Juppi! You have got Blackjack!"
        hasblackJack = true
    }else {
        message = "You are out of the game!"
        isAlive = false
    }
   messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasblackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}
